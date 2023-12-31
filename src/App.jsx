import React from 'react'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Course from './components/Course'
import '../src/App.css'
import Achievement from './components/Achievement'
import Categories from './components/Categories'
import Feedback from './components/Feedback'
import Register from './components/Register'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
    <Navbar/>
    <Introduction/>
    <Course/>
    <Achievement/>
    <Categories/>
    <Feedback/>
    <Register/>
    <Footer/>
   </>
  )
}

export default App
