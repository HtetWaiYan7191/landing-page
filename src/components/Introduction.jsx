import React from 'react'
import '../styles/Introduction.css';
import {BsSearch} from 'react-icons/bs';
import heroImage from '../assets/hero-image.png';
import adroll from '../assets/adroll.png'
import segment from '../assets/segment.png'
import sendgrid from '../assets/sendgrid.png'
import toast from '../assets/toast.png'

const Introduction = () => {
  return (
    <main className='introduction-section  flex flex-wrap justify-center py-12' id='introduction-wrapper'>
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

        <div className='intro-ending-container flex justify-center flex-col mt-14'>
            <h2 className='font-bold tracking-wide text-[36px] text-[#536E96] text-center'>Trusted By over <span className=' text-[40px] text-green-500'> 25,000 </span> teams around the world</h2>
            <p className='mt-4  text-[24px] tracking-wide text-center text-[#536E96]'>Leading companies use the same courses to help employees keep their skills fresh</p>
            <div className='leading-company-container mt-5 justify-around w-[80%] mx-auto flex'>
                <img src={adroll} alt="" width='160px' />
                <img src={segment}  width='160px' alt="" />
                <img src={sendgrid} width='160px'  alt="" />
                <img src={toast} width='160px' alt="" />
            </div>
        </div>
    </main>
  )
}

export default Introduction
