import LinkButton from "./_components/LinkButton";
import { getPost } from "./actions";


const Home = async () => {

const posts = await getPost();
console.log('am I being re rendered');

  return (
    <>
      <div className="flex flex-col h-full">
        <section className="p-4 bg-slate-900 h-96 w-96">
          calendar
          </section>
      </div>
      <div id="2" className="flex flex-col h-full min-w-96">
        <LinkButton btnText={'create Diary Entry'} href={'/create-entry'} />
        <ul className="pt-6 space-y-6">
          {posts.map((item,index) => (
            <li key={index}>{item.body}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home;