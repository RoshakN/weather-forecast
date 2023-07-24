import DetailComponent from "./DetailComponent";

function Details(props) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-4/5 mb-6 bg-blue-600 bg-opacity-30 rounded-md">
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Humidity" val="10" />
        <DetailComponent name="UV Index" val="20%" />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Visibilty" val="30%" />
        <DetailComponent name="Chance of Rain" val="40%" />
      </div>
    </div>
  );
}

export default Details;
