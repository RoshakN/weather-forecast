import SearchLineIcon from "remixicon-react/SearchLineIcon";

function SearchBar() {
  return (
    <div className="flex flex-row items-center justify-center flex-nowrap w-fit md:w-4/5 mt-3 mb-6">
      <input
        type="text"
        placeholder="Search city name..."
        className="rounded-sm flex-auto text-neutral-950 outline-none pl-[5px] bg-neutral-100"
      />
      <SearchLineIcon className="ml-2 hover:cursor-pointer active:fill-teal-900" />
    </div>
  );
}

export default SearchBar;
