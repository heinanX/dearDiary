import { format } from "date-fns";
import Calendar from "./_components/Calender/Calendar";
import LinkButton from "./_components/LinkButton";
import { getPost } from "./actions";

const Home = async () => {
  const posts = await getPost();

  return (
    <>
    <div className="w-11/12">
      <LinkButton btnText={"create new entry +"} href={"/create-entry"} />
    </div>
      <article className="flex max-h-screen">
        <section className="w-1/2 p-4">
          <Calendar />
        </section>

        <section id="2" className="w-1/2 p-2 overflow-y-scroll max-h-[512px] scrollbar">
          <ul className="flex flex-col gap-2 pt-6 space-y-6">
            {posts.map((item, index) => (
              <li key={index} className="p-2 text-white rounded-lg bg-lighterPurple">
                <p className="pr-2 mb-2 text-xs font-bold text-right ">{format(item.date,"yyyy-MM-dd")}</p>
                <p className="pb-2">{item.body}</p>
                </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Home;
