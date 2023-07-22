import SunLineIcon from "remixicon-react/SunLineIcon";
import {
  SunriseAlt,
  Sunset,
  TemperatureUp,
  TemperatureDown,
} from "react-flaticons";

function Day(props) {
  return (
    <div className="flex flex-col justify-center w-20 items-center mx-0.5 p-1 border-cyan-600 border-2">
      <h1 className="font-bold">Today</h1>
      <SunLineIcon className="my-1" />
      <ul className="flex flex-col flex-nowrap w-full">
        <li className="flex justify-between items-center my-1">
          <SunriseAlt size="16px" />
          <div className="text-xs font-normal">6:15</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <Sunset size="16px" className="mr-3" />
          <div className="text-xs font-normal">19:20</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureUp size="16px" className="mr-3" />
          <div className="text-xs font-normal">40°</div>
        </li>

        <li className="flex justify-between items-center my-1">
          <TemperatureDown size="16px" className="mr-3" />
          <div className="text-xs font-normal">25°</div>
        </li>
      </ul>
    </div>
  );
}

export default Day;
