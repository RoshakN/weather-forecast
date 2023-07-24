import Axios from "axios";

function getLocation(locationName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`;

  async function fetchData() {
    const res = await Axios.get(url);
    const data = await res.data.results[0];
    return data;
  }
  return fetchData();
  // console.log(fetchData());
  // const { country_code, name, latitude, longitude } = fetchData().then(
  //   (data) => data
  // );
  // return { country_code, name, latitude, longitude };
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
  return {
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
    apparent_temperature,
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
  console.log("Weather Code:" + weathercode);
};
export { getIconFromCode };
export default getFormattedData;
