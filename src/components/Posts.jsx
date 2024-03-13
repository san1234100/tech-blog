import PostCard from "./PostCard";
import postData from "../data/postData.json";
const Posts = () => {
  return (
    <div className="w-full me-14">
      {postData.map((post) => {
        return (
          <PostCard
            title={post.title}
            author={post.author}
            date={post.date}
            desc={post.desc}
            img={post.img}
          />
        );
      })}
    </div>
  );
};

export default Posts;
