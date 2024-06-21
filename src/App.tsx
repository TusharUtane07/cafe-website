import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GotoTop from "./components/GotoTop"
import { FC } from "react"

const App:FC = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <GotoTop/>
      <Footer/>
    </div>
  )
}

export default App