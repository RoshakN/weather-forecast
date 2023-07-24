function Location(props) {
  return (
    <div className="flex flex-col my-6">
      <h1 className="font-medium text-3xl">{props.weather.city}</h1>
    </div>
  );
}

export default Location;
