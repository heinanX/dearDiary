import Link from "next/link";

const LinkButton = ({btnText, href}) => {
  return (
    <Link href={href}>
    <button className="w-full p-2 my-2 bg-orange-400 hover:bg-orange-500 hover:shadow-md">
    {btnText}
  </button>
  </Link>
  )
}

export default LinkButton