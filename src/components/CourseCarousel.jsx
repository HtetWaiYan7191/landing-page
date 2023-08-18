import React from 'react'
import courses from '../assets/coursesInfo/courses'
import Slider from 'react-slick';
import CourseCarouselCard from './CourseCarouselCard';

const CourseCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (

    <div className='course-carousel-container max-w-[600px] md:max-w-[1480px] m-auto grid grid-cols-4 gap-8 py-10 mt-3 '> 
    <Slider {...settings}>
    {
      courses.map((course) => (
        <CourseCarouselCard key={course.id} course={course}/>
      ))
    }
   </Slider>
  
  </div>
 
  
  )
}

export default CourseCarousel
