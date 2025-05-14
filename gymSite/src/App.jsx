import {} from 'react'
import './App.css'
import HeaderComp from './Components/headerComp'
import "./Components/Components.css"
import GetFit from './Components/GetFit'
import ChooseUs from './Components/ChooseUs'
import Registeration from './Components/Registeration'
import FooterComp from './Components/FooterComp'
import DisplayImage from './Components/DisplayImage'
function App() {

  return (
    <>
  {/* <HeaderComp/> */}
  <GetFit/>
  <ChooseUs/>
  <Registeration/>
  <DisplayImage/>
  <FooterComp/>
    </>
  )
}

export default App
