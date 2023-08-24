import React from 'react'
import greenBall from '../assets/green-ball.png'
import redBall from '../assets/red-ball.png'
import student from '../assets/student-img.png'

const Register = () => {
  return (
    <section className="register-section relative flex justify-center bg-green-200 items-center h-[90vh]" id='register-wrapper'>
        <figure className=' absolute top-40 left-32' >
            <img src={redBall} alt="" />
        </figure>
        <figure  className=' absolute top-50 left-50'>
            <img src={greenBall} alt="" />
        </figure>

        <div className="register-container flex items-center">
            <img src={student} alt="" className=' w-[50%] me-10' />
            <div className="register-info">
                <h2 className='text-2xl font-semibold tracking-normal leading-snug'>Join <span className='text-green-500'>World's largest</span> learning <br /> platform today</h2>
                <p className='mt-5 text-sm'>Start learning by registering for free</p>
                <button className='font-semibold bg-green-500 px-2 py-1 text-white/90 rounded-md mt-4'>Sign up for Free</button>
                
            </div>
        </div>
    </section>
  )
}

export default Register
