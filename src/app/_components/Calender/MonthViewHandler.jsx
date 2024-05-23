import { format, addYears, subYears, setMonth, getMonth } from "date-fns";
import { IoMdReturnLeft } from "react-icons/io";
import DateToggleBtn from "./DateToggleBtn";

const MonthViewHandler = ({ date, months, setShowOverview, dateHandler }) => {
  return (
    <div>
      <div className="flex justify-between py-2">
        <DateToggleBtn
          onClick={() => dateHandler("y", subYears(date, 1))}
          action={"prev"}
          text={format(subYears(date, 1), "yyyy")}
        />

        <h1 className="text-2xl text-center text-orange-400 cursor-default">
          {format(date, "yyyy")}
        </h1>

        <DateToggleBtn
          onClick={() => dateHandler("y", addYears(date, 1))}
          action={"next"}
          text={format(addYears(date, 1), "yyyy")}
        />
      </div>

      <hr />
      
      <ul className="grid grid-cols-2 py-4 gap-y-2">
        {months.map((month, i) => (
          <li key={i} className="px-4">
            <button
              onClick={() => dateHandler("m", setMonth(date, i))}
              className={`hover:text-orange-400 ${
                i === getMonth(date) ? "font-bold text-orange-400" : null
              }`}
            >
              {month}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-center pt-2">
        <button
          onClick={() => setShowOverview(false)}
          className="p-2 rounded-full bg-orange-200/20"
        >
          <IoMdReturnLeft />
        </button>
      </div>
    </div>
  );
};

export default MonthViewHandler;
