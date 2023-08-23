import React from 'react'
import FeedbackCarousel from './FeedbackCarousel'


const Feedback = () => {
  return (
    <section className='feedback-section flex justify-center items-center h-[90vh]' id='feedback-wrapper'>
        <div className='feedback-container w-[80%]'>
            <div className="feedback-title">
                <h2 className='text-4xl font-semibold tracking-wide ms-10'>Student <span className='text-green-500'>Feedback</span></h2>
                <p className='text-gray-500 text-sm mt-3 ms-10'>Various versions have evolved over the years, sometimes by accident.</p>
               
            </div>
            <FeedbackCarousel/>
           
        </div>
    </section>
  )
}

export default Feedback