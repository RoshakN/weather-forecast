import SunLineIcon from "remixicon-react/SunLineIcon";
import {
  SunriseAlt,
  Sunset,
  TemperatureUp,
  TemperatureDown,
} from "react-flaticons";

function Day(props) {
  return (
    <div className="flex flex-col justify-center w-32 items-center mx-0.5 p-2 bg-cyan-600 bg-opacity-50 rounded-md">
      <h1 className="font-bold">Today</h1>
      <SunLineIcon className="my-1" />
      <ul className="flex flex-col flex-nowrap w-full">
        <li className="flex justify-between items-center my-1">
          <SunriseAlt size="14px" />
          <div className="text-xs md:text-base font-normal">6:15</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <Sunset size="14px" className="mr-1" />
          <div className="text-xs md:text-base font-normal">20:20</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureUp size="14px" />
          <div className="text-xs md:text-base font-normal">40°</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureDown size="14px" />
          <div className="text-xs md:text-base font-normal">25°</div>
        </li>
      </ul>
    </div>
  );
}

export default Day;
