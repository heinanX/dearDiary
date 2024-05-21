"use client";
import { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import CalendarDays from "./CalendarDays";
const weekdaysShort = ["S", "M", "T", "W", "T", "F", "S"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(Date.now());
  const [showOverview, setShowOverview] = useState(false);

  const changeCurrentMonth = (action) => {
    setLoading(true);
    if (action === "next") {
      setDate(addMonths(date, 1));
    } else {
      setDate(subMonths(date, 1));
    }
    setLoading(false);
  };

  const changeCurrentYear = () => {
    setShowOverview(true);
    console.log(showOverview);
  };

  return (
    <div id="container" className="w-full">
      <div
        id="Calendar-Container"
        className="flex flex-col w-full p-5 text-gray-200 rounded-md bg-primaryBgLight/80"
      >
        {loading ? (
          <></>
        ) : (
          <>
            {showOverview ? (
              <button onClick={() => setShowOverview(!showOverview)}>
                go back
              </button>
            ) : (
              <>
                <div
                  id="Calendar-Header"
                  className="flex flex-row justify-between w-full px-10 py-4 text-4xl"
                >
                  <button
                    className="1/5"
                    onClick={() => changeCurrentMonth("prev")}
                  >
                    {"<"}
                  </button>
                  <h1
                    className="p-2 text-3xl hover:cursor-pointer"
                    onClick={changeCurrentYear}
                  >
                    {format(date, 'MMMM')}
                  </h1>
                  <button
                    className="1/5"
                    onClick={() => changeCurrentMonth("next")}
                  >
                    {">"}
                  </button>
                </div>

                <div className="table-header">
                  <div className="grid grid-cols-7 py-2 text-center weekday">
                    {weekdaysShort.map((weekday, index) => (
                      <p key={index} className="p-2">
                        {weekday}
                      </p>
                    ))}
                  </div>
                </div>
                <CalendarDays date={date} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
