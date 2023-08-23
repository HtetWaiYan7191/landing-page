import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

const CategoryCard = ({category}) => {
  return (
    <div className='category-card flex justify-between items-center px-4 py-2 rounded-md bg-white'>
      <div className="category-name flex items-center">
        <img src={category.logoImage} className='me-2' alt="" />
        <span className='text-sm font-semibold text-green-700'>{category.name}</span>
      </div>
      <div className="icon-container">
        <BsArrowUpRight className=''/>
      </div>
    </div>
  )
}

export default CategoryCard
