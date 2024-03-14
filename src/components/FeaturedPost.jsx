import postData from "../data/postData.json";
const FeaturedPost = () => {
 
  return (
    <div className="bg-white mt-10 select-none p-5 rounded-lg max-w-2xl ms-auto h-fit pb-10">
      <h4 className="text-xl font-medium">Featured Posts</h4>
      {postData.map((post,index)=>{
         const { title, img, desc, author, date } = postData[index];
        return index<4 ? <div className="bg-white p-2 rounded-md flex select-none">
        <img src={img} className=" w-20 h-20 rounded-md" alt="" />
        <div className="px-5">
          <h4 className="font-semibold text-xs">{title}</h4>
          <div className="mt-1 mb-1 space-x-10 flex items-center">
            <p className="text-gray-400 text-xs">
              By <span className="text-black">{author}</span>
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
                <path
                  fill="currentColor"
                  d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                />
              </svg>
              <p className="text-xs">{date}</p>
            </div>
          </div>
          <p className="text-xs">{
           ` ${desc.slice(0,68) }...`
          }</p>
        </div>
      </div> : ''
      })}
    </div>
  );
};

export default FeaturedPost;
