import Axios from "axios";

function getLocation(locationName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`;

  async function fetchData() {
    const res = await Axios.get(url);
    const data = await res.data.results[0];
    return data;
  }
  return fetchData();
}

const formatLocation = (data) => {
  const { latitude, longitude, name: city_name } = data;
  return { latitude, longitude, city_name };
};

const formatWeather = (data) => {
  let {
    hourly: { time: hourly_time },
    current_weather: { time: current_time },
  } = data;

  const current_time_edited =
    current_time.slice(0, 14) + "0" + current_time[15];

  const currentIndex = hourly_time.indexOf(current_time_edited);
  let {
    current_weather: {
      is_day,
      temperature,
      weathercode: current_weathercode,
      windspeed,
    },
    daily: {
      sunrise,
      sunset,
      time: daily_time,
      weathercode: daily_weathercode,
      temperature_2m_max: max_temp,
      temperature_2m_min: min_temp,
    },
    hourly: {
      relativehumidity_2m,
      apparent_temperature,
      precipitation_probability,
      visibility,
      uv_index,
    },
  } = data;
  const humidity = relativehumidity_2m[currentIndex];
  const feels_like = apparent_temperature[currentIndex];
  const rain_probability = precipitation_probability[currentIndex];
  const current_visibility = visibility[currentIndex];
  const current_uv_index = uv_index[currentIndex];
  // const sunriseTime = sunrise.slice(0, 5);
  // console.log(sunriseTime);
  let dailyDetails = [];
  daily_time.slice(0, 5).map((t, index) => {
    dailyDetails[index] = { date: t };
  });
  daily_weathercode.slice(0, 5).map((w, index) => {
    dailyDetails[index] = { ...dailyDetails[index], weathercode: w };
  });
  max_temp.slice(0, 5).map((t, index) => {
    dailyDetails[index] = { ...dailyDetails[index], max_temp: t };
  });
  min_temp.slice(0, 5).map((t, index) => {
    dailyDetails[index] = { ...dailyDetails[index], min_temp: t };
  });
  sunrise.slice(0, 5).map((t, index) => {
    dailyDetails[index] = { ...dailyDetails[index], sunrise: t };
  });
  sunset.slice(0, 5).map((t, index) => {
    dailyDetails[index] = { ...dailyDetails[index], sunset: t };
  });
  return {
    dailyDetails,
    is_day,
    temperature,
    current_time,
    current_weathercode,
    windspeed,
    daily_weathercode,
    daily_time,
    max_temp,
    min_temp,
    sunrise,
    sunset,
    hourly_time,
    humidity,
    feels_like,
    rain_probability,
    current_visibility,
    current_uv_index,
    current_time_edited,
  };
};
const getFormattedData = async (searchParams) => {
  const formattedData = await getLocation(searchParams).then(formatLocation);

  const newUrl = `https://api.open-meteo.com/v1/forecast?latitude=${formattedData.latitude}&longitude=${formattedData.longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,visibility,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`;
  const cityName = { city: formattedData.city_name };
  function getWeather() {
    async function fetchWeather() {
      const res = await Axios.get(newUrl);
      const data = await res.data;
      return data;
    }
    return fetchWeather();
  }
  const weatherData = await getWeather().then(formatWeather);
  const mergedData = Object.assign(weatherData, cityName);
  return mergedData;
};
const getIconFromCode = (weathercode) => {
  switch (weathercode) {
    case 0:
      return { weatherCode: "Clear", weatherIcon: 1 };
    case 1:
      return {
        weatherCode: "Mainly Clear",
        weatherIcon: 2,
      };
    case 2:
      return { weatherCode: "Partly Clear", weatherIcon: 4 };
    case 3:
      return { weatherCode: "Overcast", weatherIcon: 7 };
    case 45:
      return { weatherCode: "Fog", weatherIcon: 9 };
    case 48:
      return { weatherCode: "Depositing Rime Fog", weatherIcon: 9 };
    case 51:
      return { weatherCode: "Light Drizzle", weatherIcon: 11 };
    case 53:
      return { weatherCode: "Moderate Drizzle", weatherIcon: 11 };
    case 55:
      return { weatherCode: "Dense Drizzle", weatherIcon: 11 };
    case 56:
      return { weatherCode: "Light Freezing Drizzle", weatherIcon: 14 };
    case 57:
      return { weatherCode: "Dense Freezing Drizzle", weatherIcon: 14 };
    case 61:
      return { weatherCode: "Slight Rain", weatherIcon: 37 };
    case 63:
      return { weatherCode: "Moderate Rain", weatherIcon: 38 };
    case 65:
      return { weatherCode: "Heavy Rain", weatherIcon: 39 };
    case 66:
      return { weatherCode: "Cold Rain", weatherIcon: 17 };
    case 67:
      return { weatherCode: "Freezing Rain", weatherIcon: 17 };
    case 71:
      return { weatherCode: "Slight Snow Fall", weatherIcon: 57 };
    case 73:
      return { weatherCode: "Moderate Snow Fall", weatherIcon: 58 };
    case 75:
      return { weatherCode: "Heavy Snow Fall", weatherIcon: 59 };
    case 77:
      return { weatherCode: "Snow Grain", weatherIcon: 67 };
    case 80:
      return { weatherCode: "Slight Rain Shower", weatherIcon: 21 };
    case 81:
      return { weatherCode: "Moderate Rain Shower", weatherIcon: 24 };
    case 82:
      return { weatherCode: "Violent Rain Shower", weatherIcon: 27 };
    case 85:
      return { weatherCode: "Slight Snow Shower", weatherIcon: 47 };
    case 86:
      return { weatherCode: "Heavy Snow Shower", weatherIcon: 49 };
    case 95:
      return { weatherCode: "Thunderstorm", weatherIcon: 77 };
    case 96:
      return { weatherCode: "Thunderstorm, Slight Hail", weatherIcon: 77 };
    case 99:
      return { weatherCode: "Thunderstorm, Heavy Hail", weatherIcon: 77 };
    default:
      return { weatherCode: "Weather Unknown", weatherIcon: 1 };
  }
};
export { getIconFromCode };
export default getFormattedData;
