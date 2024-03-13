import Hero from "./components/Hero"
import Nav from "./components/Nav"
import TheHeader from "./components/TheHeader"

function App() {
  return (
    <>
     <TheHeader/>
     <div className="h-0.5 bg-lightBlue mx-20"></div>
     <Nav/>
     <Hero/>
    </>
  )
}

export default App
