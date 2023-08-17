import React from 'react'
import '../styles/Introduction.css';
import {BsSearch} from 'react-icons/bs';
import heroImage from '../assets/hero-image.png';

const Introduction = () => {
  return (
    <main className='introduction-section  flex justify-center py-32' id='introduction-wrapper'>
        <div className='introduction-container w-[80%] flex justify-around items-center'>
            <div className='information-container p-5 flex-1 '>
                <h2 className='text-green-500'>START TO SUCCESS</h2>
                <h2 className='main-title text-5xl font-semibold mt-4 line-clamp-3'>Access To <span className='text-green-500 text-5xl font-semibold'>5000+ </span>
                Courses from <span className='text-green-500 text-5xl font-semibold'>300</span> Instructors & Institutions
                </h2>
                <h2 className=' text-gray-400 mt-3 font-semibold'>Various versions have evolved over the years, sometimes by accident.</h2>
                
    <div className='input-container relative mt-4 '>
    <input
        type="text"
        placeholder='What do you want to learn?'
        className='relative border focus:border-none shadow px-2 py-1  w-[100%] placeholder:font-semibold rounded-md outline-none focus:outline-green-500'
    />
    <div className='absolute top-1/2 transform -translate-y-1/2 right-2'>
        <BsSearch className='text-lg' />
    </div>
</div>

               
               
            </div>
            <figure className='hero-img-container flex-1 p-4 '>
                <img src={heroImage} className='w-[100%]' alt="" />
            </figure>
        </div>
    </main>
  )
}

export default Introduction
