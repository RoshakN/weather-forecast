import {
  SunriseAlt,
  Sunset,
  CloudSun,
  TemperatureUp,
  TemperatureDown,
} from "react-flaticons";
import { useContext } from "react";
import { WeatherContext } from "../App";

function Day(props) {
  const { weather } = useContext(WeatherContext);
  const index = props.day;
  // const date = weather.daily_time[index];
  // console.log(date.getDay());
  const dayName =
    weather.daily_time[index] === weather.current_time.slice(0, 10)
      ? "Today"
      : "Tomorrow";
  return (
    <div className="flex flex-col justify-center w-32 items-center mx-0.5 p-2 bg-blue-600 bg-opacity-30 rounded-md">
      <h1 className="font-bold">{dayName}</h1>
      <CloudSun className="my-1" />
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
