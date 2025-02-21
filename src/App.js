import React from 'react'
import ProjectCards from './pages/Cards'
import Navbar from './pages/NavBar'
import Footer from './pages/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ProjectCards/>
      <Footer/>
    </div>
  )
}

export default App