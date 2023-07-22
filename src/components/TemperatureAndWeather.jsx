import CelsiusLineIcon from "remixicon-react/CelsiusLineIcon";
import SunLineIcon from "remixicon-react/SunLineIcon";

function TemperatureAndWeather() {
  return (
    <div className="flex flex-col my-10 items-center justify-center">
      <div className="flex flex-row">
        <h1 className="text-6xl font-extrabold">32</h1>
        <div className="self-start flex flex-row">
          <CelsiusLineIcon />
        </div>
      </div>
      <p className="mt-3 mb-6 text-sm">
        Feels like <span>36°</span>
      </p>
      <p className="font-semibold">Clear</p>
      <SunLineIcon className="mt-2" />
    </div>
  );
}

export default TemperatureAndWeather;
