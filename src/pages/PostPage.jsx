import Posts from "../components/Posts";

const PostPage = () => {
    return ( 
       <>
       <h1 className="text-white text-2xl font-semibold text-center py-5">Post Page</h1>
       <div className="grid grid-cols-2 gap-x-5 p-10">
           <Posts/>
       </div>
       </>
     );
}
 
export default PostPage;