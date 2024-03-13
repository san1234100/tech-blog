import PostCard from "./PostCard";

const Posts = () => {
    const postdata={
        title:"Javascript",
        author:"Shriram",
        date:"12 June 2024",
        desc:"I'm a web developer who transforms concepts into interactive digital experiences with a blend of creativity and technical process.",
        img:"./src/assets/images/pic1.jpg"
    }
    return ( 
        <div className="w-full me-14">
          <PostCard
          title={postdata.title}
          author={postdata.author}
          date={postdata.date}
          desc={postdata.desc}
          img={postdata.img}
          />
        </div>
     );
}
 
export default Posts;