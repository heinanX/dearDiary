import Link from "next/link";

const PrimaryButton = ({ btnText, href }) => {
  return (
    <Link href={href}>
      <button className="w-full p-4 my-2 font-semibold rounded-full lg:p-2 hover:font-bold bg-gradient-to-bl from-peachy to-apricot text-purple hover:bg-gradient-to-br hover:shadow-md">
        {btnText}
      </button>
    </Link>
  );
};

export default PrimaryButton;
