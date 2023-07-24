import { CloudSun } from "react-flaticons";

function DetailComponent(props) {
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <h1 className="font-semibold text-base text-center">{props.name}</h1>
      <CloudSun className="my-1" />
      <p>{props.val}</p>
    </div>
  );
}

export default DetailComponent;
