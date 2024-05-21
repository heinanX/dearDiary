import { getMonth, getDaysInMonth } from "date-fns";

const CalendarDays = ({date}) => {
    const totalOfDaysCurrentMonth = getDaysInMonth(date)
    const totalDays = [];

const renderDays = () => {
    for (let i = 1; i < getDaysInMonth(date) + 1; i++) {
    console.log(i);
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