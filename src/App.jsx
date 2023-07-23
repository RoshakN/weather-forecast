import DaysOfWeek from "./components/DaysOfWeek";
import Details from "./components/Details";
import Location from "./components/Location";
import SearchBar from "./components/SearchBar";
import TemperatureAndWeather from "./components/TemperatureAndWeather";
import getLocation from "./services/weatherServices";

function App() {
  const data = getLocation("london");
  console.log(data);

  return (
    <div className="mx-auto max-w-sm transform ease-out md:max-w-screen-md lg:max-w-screen-lg mt-4 py-5 px-10 bg-gradient-to-br from bg-blue-400 to to-blue-600 h-fit shadow-md shadow-gray-400 text-neutral-50 flex flex-col items-center justify-center rounded-md">
      <SearchBar />
      <Location />
      <TemperatureAndWeather />
      <Details />
      <DaysOfWeek />
    </div>
  );
}

export default App;
