const PostCard = ({title='Web Development',author='Unknown',date,desc,img="./src/assets/images/pic9.jpg"}) => {
    return ( 
        <div className="bg-white p-5 rounded-md flex select-none">
        <img src={img} className=" w-72 h-52" alt="" />
        <div className="px-5">
          <h4 className="font-semibold text-2xl">{title}</h4>
        <div className="mt-1 mb-2 space-x-10 flex items-center">
        <p className="text-gray-400">By <span className="text-black">{author}</span></p>
          <div className="flex items-center space-x-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"/><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
          <p>{date}</p>
          </div>
        </div>
        <span className="text-xs bg-darkBlue text-white px-2 py-1 rounded">Web Development</span>
         <p className="py-3">
         {desc}
         </p>
        </div>
      </div>
     );
}
 
export default PostCard;