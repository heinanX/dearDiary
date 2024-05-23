import { format, addYears, subYears, setMonth } from "date-fns";
import { IoMdReturnLeft } from "react-icons/io";

const MonthViewHandler = ({
  date,
  months,
  setShowOverview,
  handleHeaderEvent,
}) => {
  return (
    <div>
      <button onClick={() => setShowOverview(false)}>
        <IoMdReturnLeft />
      </button>
      <div className="flex justify-between py-2">
        <button onClick={() => handleHeaderEvent("y", subYears(date, 1))}>
          {"<"} {format(subYears(date, 1), "yyyy")}
        </button>

        <h1 className="text-2xl text-center text-orange-400">
          {format(date, "yyyy")}
        </h1>

        <button onClick={() => handleHeaderEvent("y", addYears(date, 1))}>
          {format(addYears(date, 1), "yyyy")} {">"}
        </button>
      </div>
      <hr />
      <ul className="grid grid-cols-2 py-2 gap-y-2">
        {months.map((month, i) => (
          <li key={i} className="px-4">
            <button onClick={() => handleHeaderEvent("m", setMonth(date, i))}>
              {month}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthViewHandler;
