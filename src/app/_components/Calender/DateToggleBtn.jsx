import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const DateToggleBtn = ({onClick, action, text}) => {

  return (
    <button className="flex flex-row items-center hover:text-orange-400" onClick={onClick}>
      {action === 'next' ? 
      <>
      {text} <IoIosArrowForward />
      </> : <>
      <IoIosArrowBack /> {text}
      </> }
      
    </button>
  );
};

export default DateToggleBtn;
