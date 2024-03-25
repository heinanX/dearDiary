import LinkButton from "../_components/LinkButton";
import ActionButton from "../_components/ActionButton";

const page = () => {
  return (
    <div className="flex flex-col h-full">
      <textarea
        placeholder="write about your day"
        className="p-4 text-black h-[500px] w-[500px]"
        autoFocus
      />
      <ActionButton btnText={"Create Entry"} />
      <LinkButton btnText={"return"} href={"/"} />
    </div>
  );
};

export default page;
