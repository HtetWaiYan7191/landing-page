import React, {useEffect} from 'react'
import '../styles/Navbar.css'
import {BiLockOpen} from 'react-icons/bi'

const Navbar = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.navbar-list li');
    
        const updateActiveNavItem = () => {
          const scrollPosition = window.scrollY;
    
          sections.forEach((section, index) => {
            const topOffset = section.offsetTop;
            const bottomOffset = topOffset + section.clientHeight;
    
            if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
              navItems.forEach(navItem => {
                navItem.classList.remove('activeNavItem');
              });
              navItems[index].classList.add('activeNavItem');
            }
          });
        };
    
        window.addEventListener('scroll', updateActiveNavItem);
    
        return () => {
          window.removeEventListener('scroll', updateActiveNavItem);
        };
      }, []);
  return (
    <nav id='navbar-wrapper' className='navbar-section border-b fixed top-0 left-0 w-[100%] z-10 backdrop-blur-sm bg-white/80'>
        <div className="navbar-container flex justify-around items-center py-4">
            <h2 className='text-3xl text-green-500 font-semibold'>Practice</h2>
            <ul className='navbar-list flex'>
               <a href="#introduction-wrapper"> <li className='me-2 text-sm active:text-green-700 hover:text-green-500 activeNavItem'>Home</li></a>
               <a href="#course-wrapper"> <li className='me-2 text-sm active:text-green-700 hover:text-green-500 activeNavItem'>Course</li></a>
               <a href="#achievement-wrapper"> <li className='me-2 text-sm active:text-green-700 hover:text-green-500 activeNavItem'>About</li></a>
               <a href="#feedback-wrapper"> <li className='me-2 text-sm active:text-green-700 hover:text-green-500 activeNavItem'>Feedback</li></a>
               <a href="#register-wrapper"> <li className='me-2 text-sm active:text-green-700 hover:text-green-500 activeNavItem'>Contact</li></a>
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
