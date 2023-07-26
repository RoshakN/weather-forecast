import { Sun, Eye, Humidity, Raindrops } from "react-flaticons";

function DetailComponent(props) {
  // const getDetailIcon = ({ icon }) => {
  //   const DetailIcon = icon;
  //   return DetailIcon;
  // };
  // const IconName = getDetailIcon(props.icon);
  let DetailIcon =
    props.icon === "Humidity" ? (
      <Humidity className="my-2" />
    ) : props.icon === "Visibility" ? (
      <Eye className="my-2" />
    ) : props.icon === "Rain" ? (
      <Raindrops className="my-2" />
    ) : (
      <Sun className="my-2" />
    );
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <h1 className="font-semibold text-base text-center">{props.name}</h1>
      <>{DetailIcon}</>
      <p className="font-light text-sm text-center">
        {props.val}
        {props.sign}
      </p>
    </div>
  );
}

export default DetailComponent;
