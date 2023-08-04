import React from "react";
import { createContext, useEffect, useState } from "react";
import DaysOfWeek from "./components/DaysOfWeek";
import Details from "./components/Details";
import Location from "./components/Location";
import SearchBar from "./components/SearchBar";
import TemperatureAndWeather from "./components/TemperatureAndWeather";
import getFormattedData from "./services/weatherServices";

function App() {
  // // State for storing previously searched city in localStorage
  const storedCity = JSON.parse(localStorage.getItem("myCity"));

  const [text, setText] = useState(null);
  const [locat, setLocat] = useState(storedCity || "London");
  const [weather, setWeather] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setLocat(text);
  };

  // // This useEffect runs the JS logic based on the new location and also saves the name of the searched city into the local storage of the browser after each change.
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData(locat).then((data) => setWeather(data));
    };
    fetchWeather();

    localStorage.setItem("myCity", JSON.stringify(locat));
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
