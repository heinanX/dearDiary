const SubmitButton = ({ btnText, pending }) => {
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full p-2 my-2 bg-orange-400 hover:bg-orange-500 hover:shadow-md"
    >
      {btnText}
    </button>
  );
};

export default SubmitButton;
