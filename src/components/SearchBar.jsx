import { Search } from "react-flaticons";

function SearchBar(props) {
  return (
    <div className="flex flex-row items-center justify-center flex-nowrap w-fit md:w-4/5 mt-3 mb-6">
      <input
        type="text"
        placeholder="Search city name..."
        className="rounded-sm flex-auto text-neutral-950 outline-none pl-[10px] bg-neutral-100 p-2"
        onChange={props.handleChange}
      />
      <Search
        size={30}
        className="ml-2 hover:cursor-pointer active:fill-teal-900"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default SearchBar;
