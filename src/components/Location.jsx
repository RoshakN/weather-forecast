import { useContext } from "react";
import { WeatherContext } from "../App";

function Location() {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="flex flex-col my-6">
      <h1 className="font-medium text-3xl">{weather.city}</h1>
    </div>
  );
}

export default Location;
