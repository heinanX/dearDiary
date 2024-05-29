import { getPostByID } from "@/actions";

//Todo: Create page for displaying created post
const page = async ({params}) => {
    const post = await getPostByID(params.id);
   console.log(post);
  return (
    <div>page</div>
  )
}

export default page