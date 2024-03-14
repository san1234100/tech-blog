import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import postData from '../data/postData.json'
const PostLayout = () => {
    const {id} = useParams();
    const post = postData.filter(post=>post.id == id)
   console.log(post);
    return ( 
       <div className="flex items-center justify-center">
         <PostCard
          id={post[0].id}
          title={post[0].title}
          desc={post[0].desc}
          author={post[0].author}
          date={post[0].date}
          img={`.${post[0].img}`}
         />
       </div>
     );
}
 
export default PostLayout;