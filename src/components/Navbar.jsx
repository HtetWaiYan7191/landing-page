import React from 'react'
import '../styles/Navbar.css'
import {BiLockOpen} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav id='navbar-wrapper' className='navbar-section border-b fixed top-0 left-0 w-[100%] z-10 backdrop-blur-sm bg-white/80'>
        <div className="navbar-container flex justify-around items-center py-4">
            <h2 className='text-3xl text-green-500 font-semibold'>Practice</h2>
            <ul className='navbar-list flex'>
                <li className='me-2 text-sm text-green-500'>Home</li>
                <li className='me-2 text-sm'>About</li>
                <li className='me-2 text-sm'>Course</li>
                <li className='me-2 text-sm'>Blog</li>
                <li className='me-2 text-sm'>Contact</li>
            </ul>
            <div className='login-container flex items-center'>
                <div className='lock-icon  flex items-center me-4'>
                    <BiLockOpen className='me-2'/>
                    <span>Login</span>
                </div>
                <button className=' bg-green-600 text-white p-2 px-3 rounded-md'>Sign up for Free</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
