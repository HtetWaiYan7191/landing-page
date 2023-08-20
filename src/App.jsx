import React from 'react'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Course from './components/Course'
import '../src/App.css'
const App = () => {
  return (
   <>
    <Navbar/>
    <Introduction/>
    <Course/>
   </>
  )
}

export default App
