"use client"
import { useFormState, useFormStatus } from "react-dom";
import LinkButton from "../_components/LinkButton";
import SubmitButton from "../_components/SubmitButton";
import { createPost } from "../actions";

/* future additions needed would be to clear the text field upon submission */

const initialState = {
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(createPost, initialState);
const { pending } = useFormStatus();

console.log(state);
console.log(formAction);

  return (
    <div className="flex flex-col h-full">
      <form action={formAction} >
        <label className="hidden">write about your day</label>
        <textarea
        name="entry"
        placeholder="write about your day"
        className="p-4 text-black h-[500px] w-[500px]"
        autoFocus
      />
      <SubmitButton btnText={"Create Entry"} pending={pending} />

      </form>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
      <LinkButton btnText={"return"} href={"/"} />
    </div>
  );
};

export default Page;
