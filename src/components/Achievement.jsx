import React from 'react'
import achievementImage from '../assets/achievement-img.png'
import hatGreen from '../assets/hat-green.png';
import hatRed from '../assets/hat-red.png';
import camera from '../assets/camera.png';
import people from '../assets/people.png';

const Achievement = () => {
  return (
    <section className='achievement-section flex justify-center  items-center'>
      <div className='achievement-container flex justify-center items-center w-[80%] h-[547px] '>
        <div className="achievement-info me-32 pe-32">
            <div className="achievement-title">
                <h2 className='text-4xl font-semibold tracking-wide'>Our <span className='text-green-500'>Achievement</span></h2>
                <p className='text-gray-500 text-sm mt-3'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            <div className='achievement-data grid grid-cols-2 mt-10 gap-12'>
                <div className="data-card flex  items-center">
                    <img  className = 'me-3' src={hatGreen} alt="" />
                    <div className='data-card-info'>
                        <h2 className='font-semibold text-2xl'>200</h2>
                        <span className='text-gray-500 text-sm'>Instructor</span>
                    </div>
                </div>
                <div className="data-card flex  items-center">
                    <img  className = 'me-3' src={camera}alt="" />
                    <div className='data-card-info'>
                        <h2 className='font-semibold text-2xl'>10,000+</h2>
                        <span className='text-gray-500 text-sm'>Video</span>
                    </div>
                </div>
                <div className="data-card flex  items-center">
                    <img  className = 'me-3' src={hatRed} alt="" />
                    <div className='data-card-info'>
                        <h2 className='font-semibold text-2xl'>20,000+</h2>
                        <span className='text-gray-500 text-sm'>Student</span>
                    </div>
                </div>
                <div className="data-card flex  items-center">
                    <img  className = 'me-3' src={people} alt="" />
                    <div className='data-card-info'>
                        <h2 className='font-semibold text-2xl'>1,00,000+</h2>
                        <span className='text-gray-500 text-sm'>User's</span>
                    </div>
                </div>
            </div>
        </div>
        <figure className='achievement-image'>
            <img src={achievementImage} className = 'w-[320px] ' alt="" />
        </figure>
      </div>
    </section>
  )
}

export default Achievement
