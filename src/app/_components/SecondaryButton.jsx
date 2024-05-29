import Link from "next/link";

const SecondaryButton = ({ btnText, href }) => {
  return (
    <Link href={href}>
      <button className="w-full p-4 my-2 font-semibold border-2 rounded-full lg:p-2 hover:font-bold dark:border-apricot/40 hover:dark:border-apricot dark:text-apricot hover:shadow-md">
        {btnText}
      </button>
    </Link>
  );
};

export default SecondaryButton;
