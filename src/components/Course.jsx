import React from 'react'
import CourseCarousel from './CourseCarousel'

const Course = () => {
  return (
    <section  className='course-section bg-green-100 flex justify-center  items-center h-[100vh]' id='course-wrapper'>
        <div className='course-container w-[80%]'>
            <h2 className='text-4xl font-bold tracking-wide'>Most Popular <span className='text-green-500'>Courses</span></h2>
            <p className=' text-gray-500 text-sm tracking-wide mt-3'>Various verions have evolved over the years, sometimes by accident</p>
            <CourseCarousel/>
        </div>
    </section >
  )
}

export default Course
