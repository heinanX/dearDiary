import EntryViewer from "./_components/EntryViewer";
import PrimaryButton from "./_components/PrimaryButton";
import { getPosts } from "./actions";

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="w-11/12">
        <PrimaryButton btnText={"create new entry +"} href={"/create-entry"} />
      </div>
      <EntryViewer posts={posts} />
    </>
  );
};

export default Home;
