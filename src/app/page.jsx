import EntryViewer from "./_components/EntryViewer";
import LinkButton from "./_components/LinkButton";
import { getPost } from "./actions";

const Home = async () => {
  const posts = await getPost();

  return (
    <>
    <div className="w-11/12">
      <LinkButton btnText={"create new entry +"} href={"/create-entry"} />
    </div>
      <EntryViewer posts={posts} />
    </>
  );
};

export default Home;
