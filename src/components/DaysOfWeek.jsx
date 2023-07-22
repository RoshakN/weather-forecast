import Day from "./Day";

function DaysOfWeek() {
  return (
    <div className="flex flex-row flex-nowrap w-4/5 justify-evenly items-center">
      <Day day="0" />
      <Day day="1" />
      <Day day="2" />
      <Day day="3" />
      <Day day="4" />
    </div>
  );
}

export default DaysOfWeek;
