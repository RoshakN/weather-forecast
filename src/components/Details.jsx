import DetailComponent from "./DetailComponent";

function Details(props) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-4/5 mb-6 bg-blue-600 bg-opacity-30 rounded-md">
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Humidity" val={props.weather.humidity} />
        <DetailComponent name="UV Index" val={props.weather.current_uv_index} />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent
          name="Visibilty"
          val={props.weather.current_visibility}
        />
        <DetailComponent
          name="Chance of Rain"
          val={props.weather.rain_probability}
        />
      </div>
    </div>
  );
}

export default Details;
