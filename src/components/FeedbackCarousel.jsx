import React from 'react'
import Slider from 'react-slick';
import feedback from '../assets/feedbackInfo/feedback'
import vector from '../assets/Vector.png'




const FeedbackCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
    <Slider {...settings} className='mt-10 px-2'>
        {
            feedback.map((el) => (
                <div className="slick-slide p-5  overflow-hidden"  key={el.id}>
                    <div className='feedback-card shadow-md p-8  rounded-md overflow-hidden'>
                    <div className="card-header flex justify-between">
                        <div className="head-info flex items-center">
                            <img src={el.profileImg} className='w-[60px] rounded-full h-[60px] object-cover me-3' alt="" />
                            <div className="feedback-info-text">
                                <h2 className=' font-semibold text-lg'>{el.name}</h2>
                                <span className=' text-sm'>{el.job}</span>
                            </div>
                        </div>
                        <div className="end-comma">
                            <img src={vector} alt="" />
                        </div>
                    </div>

                    <div className='card-body pt-5'>
                        <p className='text-sm'>{el.description}</p>
                    </div>
                </div>
                </div>

            ))
        }
    </Slider>
  )
}

export default FeedbackCarousel
