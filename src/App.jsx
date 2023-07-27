import React from "react";
import { createContext, useEffect, useState } from "react";
import DaysOfWeek from "./components/DaysOfWeek";
import Details from "./components/Details";
import Location from "./components/Location";
import SearchBar from "./components/SearchBar";
import TemperatureAndWeather from "./components/TemperatureAndWeather";
import getFormattedData from "./services/weatherServices";

function App() {
  const [text, setText] = useState("");
  const [locat, setLocat] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setLocat(text);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData(locat).then((data) => setWeather(data));
    };
    fetchWeather();
  }, [locat]);

  return (
    <WeatherContext.Provider value={{ weather }}>
      <div className="mx-auto max-w-sm transform ease-out md:max-w-screen-md lg:max-w-screen-lg mt-4 py-5 px-10 bg-gradient-to-br from bg-blue-400 to to-blue-600 h-fit shadow-md shadow-gray-400 text-neutral-50 flex flex-col items-center justify-center rounded-md">
        <SearchBar handleChange={handleChange} handleClick={handleClick} />
        {weather && (
          <React.Fragment>
            <Location />
            <TemperatureAndWeather />
            <Details />
            <DaysOfWeek />
          </React.Fragment>
        )}
      </div>
    </WeatherContext.Provider>
  );
}

export const WeatherContext = createContext();
export default App;
