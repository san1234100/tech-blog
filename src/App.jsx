import { Outlet, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import TheHeader from "./components/TheHeader"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"

function App() {
  return (
    <>
   
     <TheHeader/>
     <div className="h-0.5 bg-lightBlue mx-20"></div>
     <Nav/>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/posts" element={<PostPage/>} />
    </Routes>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
