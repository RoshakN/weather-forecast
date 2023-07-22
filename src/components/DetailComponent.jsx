import SunLineIcon from "remixicon-react/SunLineIcon";

function DetailComponent(props) {
  return (
    <div className="flex flex-col items-center justify-center my-2 ">
      <h1 className="font-semibold text-base text-center">{props.name}</h1>
      <SunLineIcon className="my-1" />
      <p>{props.number}</p>
    </div>
  );
}

export default DetailComponent;
