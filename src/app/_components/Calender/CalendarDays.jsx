import {
  getDaysInMonth,
  startOfMonth,
  endOfMonth,
  getDay,
  subDays,
  format,
  addDays,
} from "date-fns";

const CalendarDays = ({ date, setDate }) => {
  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);
  const totalDays = [];

  const renderDays = () => {
    const startDateIndex = getDay(startDate);
    const endDateIndex = getDay(endDate);
    const totalDaysInMonthView =
      startDateIndex + getDaysInMonth(date) + 7 - endDateIndex;
    let day = subDays(startDate, startDateIndex + 1);

    for (let i = 1; i < totalDaysInMonthView; i++) {
      day = format(addDays(day, 1), "yyyy-MM-dd");
      totalDays.push({
        day: day,
        activeDay: day === format(date, "yyyy-MM-dd") ? true : false,
        currentDay: day === format(Date.now(), "yyyy-MM-dd") ? true : false,
        currentMonth: format(day, "MM") === format(date, "MM") ? true : false,
      });
    }
    // console.log(totalDays);
    return totalDays;
  };

  renderDays();

  const handleDayChange = (day) => {
    setDate(day)
    console.log(day);
  }

  return (
    <div className="grid grid-cols-7 text-center weekday">
      {totalDays.map((day, i) => (
        <button
          key={i}
          onClick={() => handleDayChange(day.day)}
          className={`aspect-square
        ${day.currentMonth ? null : "text-gray-400"}
        ${day.activeDay ? "text-orange-400" : null}
        ${day.currentDay ? "bg-orange-400/50 rounded-full hover:bg-orange-400" : "hover:text-orange-400"}
        `}
        >
          {format(day.day, "d")}
        </button>
      ))}
    </div>
  );
};

export default CalendarDays;
