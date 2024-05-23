import { format, subMonths, addMonths } from "date-fns";

const CalendarHeader = ({ date, setShowOverview, handleHeaderEvent }) => {
  return (
    <div
      id="Calendar-Header"
      className="flex flex-row justify-between w-full px-6 py-4 text-4xl"
    >
      <button
        className="hover:text-orange-400"
        onClick={() => handleHeaderEvent("m", subMonths(date, 1))}
      >
        {"<"}
      </button>
      <button
        className="text-center hover:text-orange-400"
        onClick={() => setShowOverview(true)}
      >
        <h1 className="p-2 text-3xl hover:cursor-pointer">
          {format(date, "MMMM")}
        </h1>
        <p className="text-xs">{format(date, "yyyy")}</p>
      </button>
      <button
        className="hover:text-orange-400"
        onClick={() => handleHeaderEvent("m", addMonths(date, 1))}
      >
        {">"}
      </button>
    </div>
  );
};

export default CalendarHeader;
