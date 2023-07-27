import {
  SunriseAlt,
  Sunset,
  TemperatureUp,
  TemperatureDown,
} from "react-flaticons";
import { useContext } from "react";
import { WeatherContext } from "../App";
import { getIconFromCode } from "../services/weatherServices";

function Day(props) {
  const { weather } = useContext(WeatherContext);
  const index = props.day;

  const date = new Date(weather.daily_time[index]);
  const weekDay = date.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const dayName =
    weather.daily_time[index] === weather.current_time.slice(0, 10)
      ? "Today"
      : weekDay;
  const { weatherIcon } = getIconFromCode(weather.daily_weathercode[index]);
  const imageSource =
    "https://cdn.fmi.fi/symbol-images/smartsymbol/v3/p/" + weatherIcon + ".svg";
  return (
    <div className="flex flex-col justify-center w-32 items-center mx-0.5 p-2 bg-blue-600 bg-opacity-30 rounded-md">
      <h1 className="font-bold">{dayName}</h1>
      <img src={imageSource} className="w-16 my-1" />
      <ul className="flex flex-col flex-nowrap w-full">
        <li className="flex justify-between items-center my-1">
          <SunriseAlt size="14px" />
          <div className="text-xs md:text-base font-normal">
            {weather.sunrise[index].slice(11)}
          </div>
        </li>

        <li className="flex justify-between items-center my-1">
          <Sunset size="14px" className="mr-1" />
          <div className="text-xs md:text-base font-normal">
            {weather.sunset[index].slice(11)}
          </div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureUp size="14px" />
          <div className="text-xs md:text-base font-normal">
            {weather.max_temp[index]}
          </div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureDown size="14px" />
          <div className="text-xs md:text-base font-normal">
            {weather.min_temp[index]}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Day;
