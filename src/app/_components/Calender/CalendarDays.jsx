import { getMonth, getDaysInMonth } from "date-fns";

const CalendarDays = ({date}) => {
    const totalOfDaysCurrentMonth = getDaysInMonth(date)

const renderDays = () => {
    for (let i = 1; i < getDaysInMonth(date) + 1; i++) {
console.log(i);
        
    }
}

renderDays()
  return (
    <div>

    </div>
  )
}

export default CalendarDays