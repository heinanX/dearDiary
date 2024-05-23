"use client";
import { useState } from "react";
import { format } from "date-fns";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";
import MonthViewHandler from "./MonthViewHandler";
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
  const [date, setDate] = useState(format(Date.now(), "yyyy-MM-dd"));
  const [showOverview, setShowOverview] = useState(false);

  const dateHandler = (action, func) => {
    setLoading(true);
    if (action === "m") { // m = month
      const changeMonth = func;
      setDate(changeMonth);
    }
    if (action === "y") { // y = year
      const changeYear = func;
      setDate(changeYear);
    }
    setLoading(false);
    setShowOverview(false);
  };

  return (
    <div id="container" className="w-full bg-slate-50/35">
      <div
        id="Calendar-Container"
        className="flex flex-col w-full p-5 text-gray-200 rounded-md bg-primaryBgLight/80"
      >
        {loading ? (
          <></> // TODO: Add a loader here in the future
        ) : (
          <>
            {showOverview ? (
              <>
                <MonthViewHandler
                  date={date}
                  months={months}
                  setShowOverview={setShowOverview}
                  dateHandler={dateHandler}
                />
              </>
            ) : (
              <>
                <CalendarHeader
                  date={date}
                  dateHandler={dateHandler}
                  setShowOverview={setShowOverview}
                />

                <div className="grid grid-cols-7 py-2 text-center weekday">
                  {weekdaysShort.map((weekday, index) => (
                    <p key={index} className="p-2">
                      {weekday}
                    </p>
                  ))}
                </div>

                <CalendarDays date={date} setDate={setDate} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
