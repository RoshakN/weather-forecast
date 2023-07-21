import DetailComponent from "./DetailComponent";

function Details() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-4/5 mb-6">
      <div className="flex flex-row flex-wrap justify-around w-1/2">
        <DetailComponent det="Humidity" number="10%" />
        <DetailComponent det="Chance of Rain" number="20%" />
      </div>
      <div className="flex flex-row flex-wrap justify-around w-1/2">
        <DetailComponent det="Visibilty" number="30%" />
        <DetailComponent det="UV Index" number="40%" />
      </div>
    </div>
  );
}

export default Details;
