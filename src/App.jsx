import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Posts from "./components/Posts"
import TheHeader from "./components/TheHeader"

function App() {
  return (
    <>
     <TheHeader/>
     <div className="h-0.5 bg-lightBlue mx-20"></div>
     <Nav/>
     <Hero/>
     <div className="mt-20 px-20 flex justify-around">
     <Posts/>
     <AboutMe/>
     </div>
    
    </>
  )
}

export default App
