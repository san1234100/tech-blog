import PostCard from "./PostCard";
import postData from "../data/postData.json";
const Posts = () => {
  return (
   <>
    {postData.map((post) => {
        return (
          <PostCard
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            desc={post.desc}
            img={post.img}
          />
        );
      })}
   </>
  );
};

export default Posts;
