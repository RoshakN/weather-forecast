import DetailComponent from "./DetailComponent";
import { useContext } from "react";
import { WeatherContext } from "../App";

function Details() {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="flex flex-row flex-wrap items-start justify-center w-4/5 mb-6 p-2 bg-blue-600 bg-opacity-30 rounded-md">
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Humidity" val={weather.humidity} sign="%" />
        <DetailComponent
          name="UV Index"
          val={weather.current_uv_index}
          sign=""
        />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent
          name="Visibilty"
          val={weather.current_visibility}
          sign="m"
        />
        <DetailComponent
          name="Chance of Rain"
          val={weather.rain_probability}
          sign="%"
        />
      </div>
    </div>
  );
}

export default Details;
