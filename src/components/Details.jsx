import DetailComponent from "./DetailComponent";

function Details() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-4/5 mb-6 bg-cyan-600 bg-opacity-50 rounded-md">
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Humidity" number="10%" />
        <DetailComponent name="Chance of Rain" number="20%" />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-1/2">
        <DetailComponent name="Visibilty" number="30%" />
        <DetailComponent name="UV Index" number="40%" />
      </div>
    </div>
  );
}

export default Details;
