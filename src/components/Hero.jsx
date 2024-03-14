const Hero = () => {
    return ( 
        <section className="flex space-x-10 items-center mx-10">
              <img src="./src/assets/images/web-development1.png" className="ms-10 w-[50%] rounded" alt="" />
              <div className="text-white">
                <h1 className="text-4xl font-semibold">Welcome, to <span className="text-midyellow">Tech Blog</span></h1>
                <p className="py-3 w-[540px]">
                Dive into a world of HTML, CSS, JavaScript, and beyond as we explore the latest trends and techniques. Whether you're a beginner or a seasoned pro, we've got something for everyone, from tutorials to industry insights. Join our community of developers, designers, and enthusiasts as we unravel the mysteries of the web. 
                </p>
              </div>
        </section>
     );
}
 
export default Hero;