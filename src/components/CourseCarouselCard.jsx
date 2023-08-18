import React from 'react'

const CourseCarouselCard = ({course}) => {
  return (
    <div className='course-card  bg-white rounded-2xl overflow-hidden drop-shadow-md ' key={course.id}>
    <figure className='relative'>    
    <img src={course.courseImage} alt="" className='w-full h-40 object-cover' />
    <span className='absolute top-3 left-2 py-1 px-2 bg-gray-50/50 backdrop-blur-sm rounded-md text-sm font-semibold'>{course.name}</span>
    </figure>

<p className='truncate p-3 text-lg font-semibold'>{course.description}</p>
<div className='course-rating-container flex border-b my-2 py-2 px-2'>
    <div className='star-container me-4 '>
    {course.starRating === 5 ? (
        <div className="flex">
            {[...Array(5)].map((_,index) => (
                <svg width="25" height="24" key={index} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9125 17.878L17.6375 20.878C18.2469 21.2624 18.9969 20.6905 18.8187 19.9874L17.45 14.6062C17.413 14.457 17.4189 14.3004 17.467 14.1544C17.5151 14.0085 17.6034 13.8791 17.7219 13.7812L21.9594 10.2468C22.5125 9.7874 22.2312 8.85928 21.5094 8.8124L15.9781 8.45615C15.8272 8.44737 15.6821 8.39482 15.5606 8.30491C15.439 8.21501 15.3463 8.09164 15.2937 7.9499L13.2312 2.75615C13.1767 2.60606 13.0772 2.4764 12.9464 2.38478C12.8156 2.29316 12.6597 2.24402 12.5 2.24402C12.3403 2.24402 12.1844 2.29316 12.0536 2.38478C11.9228 2.4764 11.8233 2.60606 11.7687 2.75615L9.70625 7.9499C9.65368 8.09164 9.56096 8.21501 9.43943 8.30491C9.31789 8.39482 9.17279 8.44737 9.02187 8.45615L3.49062 8.8124C2.76875 8.85928 2.4875 9.7874 3.04062 10.2468L7.27812 13.7812C7.39656 13.8791 7.48492 14.0085 7.53302 14.1544C7.58112 14.3004 7.58701 14.457 7.55 14.6062L6.28437 19.5937C6.06875 20.4374 6.96875 21.1218 7.69062 20.6624L12.0875 17.878C12.2108 17.7996 12.3539 17.758 12.5 17.758C12.6461 17.758 12.7892 17.7996 12.9125 17.878Z" fill="#FFC27A"/>
                </svg>
            ))}
        </div>
) : (
<div className="flex">
{[...Array(5)].map((_,index) => (
    <svg width="25" height="24" key={index} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.9125 17.878L17.6375 20.878C18.2469 21.2624 18.9969 20.6905 18.8187 19.9874L17.45 14.6062C17.413 14.457 17.4189 14.3004 17.467 14.1544C17.5151 14.0085 17.6034 13.8791 17.7219 13.7812L21.9594 10.2468C22.5125 9.7874 22.2312 8.85928 21.5094 8.8124L15.9781 8.45615C15.8272 8.44737 15.6821 8.39482 15.5606 8.30491C15.439 8.21501 15.3463 8.09164 15.2937 7.9499L13.2312 2.75615C13.1767 2.60606 13.0772 2.4764 12.9464 2.38478C12.8156 2.29316 12.6597 2.24402 12.5 2.24402C12.3403 2.24402 12.1844 2.29316 12.0536 2.38478C11.9228 2.4764 11.8233 2.60606 11.7687 2.75615L9.70625 7.9499C9.65368 8.09164 9.56096 8.21501 9.43943 8.30491C9.31789 8.39482 9.17279 8.44737 9.02187 8.45615L3.49062 8.8124C2.76875 8.85928 2.4875 9.7874 3.04062 10.2468L7.27812 13.7812C7.39656 13.8791 7.48492 14.0085 7.53302 14.1544C7.58112 14.3004 7.58701 14.457 7.55 14.6062L6.28437 19.5937C6.06875 20.4374 6.96875 21.1218 7.69062 20.6624L12.0875 17.878C12.2108 17.7996 12.3539 17.758 12.5 17.758C12.6461 17.758 12.7892 17.7996 12.9125 17.878Z" fill={index === 4 ? `#E7E9EB` : `#FFC27A`}/>
    </svg>
))}
</div>
)}
    </div>
    <span>{`(${course.ratingTotal})`}</span>
</div>
<h2 className='p-3 font-semibold text-lg'>{`$${course.price}`}</h2>
</div>
  )
}

export default CourseCarouselCard