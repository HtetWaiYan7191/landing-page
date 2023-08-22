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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }
  
  return (

    <Slider {...settings} className=' mt-10 px-1 py-5 '>
    {
      courses.map((course) => (
        <CourseCarouselCard key={course.id} course={course} />
      ))
    }
    </Slider>
 
  
  )
}

export default CourseCarousel
