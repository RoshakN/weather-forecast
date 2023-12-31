import CelsiusLineIcon from "remixicon-react/CelsiusLineIcon";
import { useContext } from "react";
import { WeatherContext } from "../App";
import { getIconFromCode } from "../services/weatherServices";

function TemperatureAndWeather() {
  const { weather } = useContext(WeatherContext);
  const { weatherCode, weatherIcon } = getIconFromCode(
    weather.current_weathercode
  );
  const imageSource =
    "https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/" + weatherIcon + ".svg";
  return (
    <div className="flex flex-col my-6 items-center justify-center">
      <div className="flex flex-row">
        <h1 className="text-6xl font-extrabold">{weather.temperature}</h1>
        <div className="self-start flex flex-row">
          <CelsiusLineIcon />
        </div>
      </div>
      <p className="mt-3 mb-6 text-sm">
        Feels like <span>{weather.feels_like}°</span>
      </p>
      <p className="font-semibold">{weatherCode}</p>
      <img src={imageSource} className="w-20 mt-2" />
    </div>
  );
}

export default TemperatureAndWeather;
