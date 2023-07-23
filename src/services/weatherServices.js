import Axios from "axios";

function getLocation(locationName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`;

  async function fetchData() {
    const res = await Axios.get(url);
    const data = await res.data.results[0];
    // .then((response) => {
    //   response.data.results[0];
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // console.log(data);
    return data;
  }

  return fetchData();
  // console.log(fetchData());
  // const { country_code, name, latitude, longitude } = fetchData().then(
  //   (data) => data
  // );
  // return { country_code, name, latitude, longitude };
}

export default getLocation;
