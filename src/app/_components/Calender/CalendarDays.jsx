import { getDaysInMonth, startOfMonth, endOfMonth, getDay, subMonths, addMonths, format } from "date-fns";

const CalendarDays = ({date}) => {
    const startDate = startOfMonth(date)
    const endDate = endOfMonth(date)
    const prevMonth = subMonths(endDate, 1)
    const nextMonth = addMonths(startDate, 1)

    const totalDays = [];
    console.log("prev", prevMonth);
    console.log("prev", nextMonth);

    const renderDays = () => {
        if (getDay(startDate) != 0) {
            console.log('this is not the day');
        }
    for (let i = 1; i < getDaysInMonth(date) + 1; i++) {
    //console.log(i);
        totalDays.push(i)
    }
    return totalDays
}

renderDays()
  return (
    <div className="grid grid-cols-7 text-center weekday">
        {totalDays.map((item, i) => (
            <button key={i} className="aspect-square hover:text-green-700">{i +1}</button>
        ))}
    </div>
  )
}

export default CalendarDays