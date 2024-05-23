import {
  getDaysInMonth,
  startOfMonth,
  endOfMonth,
  getDay,
  subDays,
  format,
  addDays,
} from "date-fns";

const CalendarDays = ({ date }) => {
  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);
  const totalDays = [];

  const renderDays = () => {
    const numberOfDaysIntoAMonth = getDay(startDate)
    const totalDaysInMonthView = numberOfDaysIntoAMonth + getDaysInMonth(date) + 7 - getDay(endDate);
    let days = subDays(startDate, numberOfDaysIntoAMonth + 1)

    for (let i = 1; i < totalDaysInMonthView; i++) {
      days = format(addDays(days, 1), "yyyy-MM-dd")
      totalDays.push({
        day: days,
        currentDay: days === format(date, "yyyy-MM-dd") ? true : false,
        currentMonth: format(days, "MM") === format(date, "MM") ? true : false
      });
    }
    console.log(totalDays);
    return totalDays;
  };

  renderDays();
  return (
    <div className="grid grid-cols-7 text-center weekday">
      {totalDays.map((day, i) => (
        <button
        key={i}
        className={`aspect-square hover:text-green-700
        ${day.currentMonth ? null : "text-gray-400"}
        ${day.currentDay ? "text-orange-400" : null}
        `}>
          {format(day.day, "d")}
        </button>
      ))}
    </div>
  );
};

export default CalendarDays;
