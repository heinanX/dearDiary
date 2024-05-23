const DateToggleBtn = ({onClick, icon}) => {
  return (
    <button className="hover:text-orange-400" onClick={onClick}>
      {icon}
    </button>
  );
};

export default DateToggleBtn;
