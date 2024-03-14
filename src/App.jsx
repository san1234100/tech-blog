import { Outlet, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import TheHeader from "./components/TheHeader"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import AboutMe from "./components/AboutMe"
import PostLayout from "./pages/PostLayout"

function App() {
  return (
    <>
   
     <TheHeader/>
     <div className="h-0.5 bg-lightBlue mx-20"></div>
     <Nav/>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/posts" element={<PostPage/>} />
      <Route path="/postpage/:id" element={<PostLayout/>} />
      <Route path="/about" element={
        <div className="flex items-center justify-center pb-10">
          <AboutMe/>
        </div>
      } />
    </Routes>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
