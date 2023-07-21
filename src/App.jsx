import DaysOfWeek from "./components/DaysOfWeek";
import Details from "./components/Details";
import Location from "./components/Location";
import SearchBar from "./components/SearchBar";
import TemperatureAndWeather from "./components/TemperatureAndWeather";

function App() {
  return (
    <div className="mx-auto max-w-sm transform ease-out md:max-w-screen-md lg:max-w-screen-lg mt-4 py-5 px-36 bg-gradient-to-br from bg-blue-400 to to-blue-600 h-fit shadow-md shadow-gray-400 text-neutral-50 flex flex-col items-center justify-center rounded-md bg">
      <SearchBar />
      <Location />
      <TemperatureAndWeather />
      <Details />
      <DaysOfWeek />
    </div>
  );
}

export default App;
