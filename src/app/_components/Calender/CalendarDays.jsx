import {
  getDaysInMonth,
  startOfMonth,
  endOfMonth,
  getDay,
  subDays,
  format,
  addDays,
} from "date-fns";

const CalendarDays = ({ date, setDate, posts }) => {
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
    return totalDays;
  };

  const tileContent = (day) => {
    const postFound = posts.some(
      (post) => format(post.date, "yyyy-MM-dd") === day
    );
    return postFound;
  };

  renderDays();

  const dayHandler = (day) => {
    setDate(day);
  };

  return (
    <div className="grid grid-cols-7 text-center weekday">
      {totalDays.map((day, i) => (
        <button
          key={i}
          onClick={() => dayHandler(day.day)}
          className={`aspect-square flex flex-col items-center justify-center sm:gap-1
        ${day.currentMonth ? null : "text-gray-400"}
        ${
          day.activeDay
            ? "rounded-full bg-gradient-to-b from-apricot to-peachy text-purple"
            : null
        }
        ${day.currentDay ? (!day.activeDay ? "text-peachy" : null) : null}
        `}
        >
          <p>{format(day.day, "d")}</p>
          <div
            className={`w-1 h-1 rounded-full ${
              tileContent(day.day)
                ? day.activeDay
                  ? "bg-purple"
                  : "bg-apricot"
                : null
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default CalendarDays;
