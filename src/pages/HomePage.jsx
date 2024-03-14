import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Posts from "../components/Posts"

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="mt-20 px-20 flex justify-around">
        <div className="me-10">
        <Posts />
        </div>
        <AboutMe />
      </div>
    </>
  );
};

export default HomePage;
