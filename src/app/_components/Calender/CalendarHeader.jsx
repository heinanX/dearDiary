import { format, subMonths, addMonths } from "date-fns";
import DateToggleBtn from "./DateToggleBtn";
import { IoIosArrowBack } from "react-icons/io";

const CalendarHeader = ({ date, setShowOverview, dateHandler }) => {
  return (
    <div
      id="Calendar-Header"
      className="flex flex-row justify-between w-full px-6 py-4 text-4xl"
    >
      {/* <button
        className="hover:text-orange-400"
        onClick={() => dateHandler("m", subMonths(date, 1))}
      >
        {"<"}
      </button> */}
      <DateToggleBtn onClick={() => dateHandler("m", subMonths(date, 1))} icon={<IoIosArrowBack />} />
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
        onClick={() => dateHandler("m", addMonths(date, 1))}
      >
        {">"}
      </button>
    </div>
  );
};

export default CalendarHeader;
