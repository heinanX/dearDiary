"use client";
import { useFormState, useFormStatus } from "react-dom";
import SubmitButton from "../_components/SubmitButton";
import { createPost } from "../actions";
import { useRef, useEffect } from "react";
import SecondaryButton from "@/_components/SecondaryButton";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const initialState = {
  status: null,
  message: "",
  id: null
};

const Page = () => {
  const [state, formAction] = useFormState(createPost, initialState);
  const { pending } = useFormStatus();
  const formRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if (state.status === "success") {
      formRef.current.value = "";
      router.push(`/create-entry/${state.id}`)
    }
  }, [state]);

  return (
    <div className="flex flex-col w-full h-full px-4 sm:px-20">
      <form
        action={formAction}
        className="p-4 rounded-2xl dark:bg-lighterPurple"
      >
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="w-1/4 md:w-36">
            <SecondaryButton btnText={"←"} href={"/"} />
          </div>
          <h2 className="hidden py-2 md:py-0 md:block">
            {format(Date.now(), "MMM dd, yyyy")}
          </h2>
          <div className="w-1/2 md:w-36">
            <SubmitButton btnText={"Create +"} pending={pending} />
          </div>
        </div>

        <label className="hidden">start writing</label>
        <textarea
          name="entry"
          ref={formRef}
          style={{ resize: "none" }}
          placeholder="start writing..."
          className="p-4 dark:text-white rounded-md h-[500px] w-full bg-lightPurple scrollbar"
          autoFocus
        />
        <h2 className="py-2 text-center md:hidden md:py-0">
          {format(Date.now(), "MMM dd, yyyy")}
        </h2>
      </form>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.status}
      </p>
    </div>
  );
};

export default Page;
