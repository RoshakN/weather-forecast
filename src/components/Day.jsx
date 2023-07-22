import SunLineIcon from "remixicon-react/SunLineIcon";

function Day(props) {
  return (
    <div className="flex flex-col justify-center items-center mx-1">
      <h1 className="font-bold my-2">Today</h1>
      <SunLineIcon className="my-2" />
      <ul className="flex flex-col flex-nowrap">
        <li className="flex justify-between">
          <div className="text-xs font-semibold">name:</div>
          <div className="text-xs font-normal">num</div>
        </li>
        <li className="flex justify-between">
          <div className="text-xs font-semibold">name:</div>
          <div className="text-xs font-normal">num</div>
        </li>
        <li className="flex justify-between">
          <div className="text-xs font-semibold">name:</div>
          <div className="text-xs font-normal">num</div>
        </li>
        <li className="flex justify-between">
          <div className="text-xs font-semibold">name:</div>
          <div className="text-xs font-normal">num</div>
        </li>
      </ul>
    </div>
  );
}

export default Day;
