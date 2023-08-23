import React from 'react'
import CategoryCard from './CategoryCard'
import categories from '../assets/categoriesInfo/categories'

const Categories = () => {
  return (
    <section className='category-section bg-green-200 py-10 flex justify-center items-center h-[80vh]' id='category-wrapper'>
        <div className="category-container w-[70%]">
            <div className="category-title">
                <h2 className='text-4xl font-semibold tracking-wide'>Most <span className='text-green-500'>Popular Categories</span></h2>
                <p className='text-gray-500 text-sm mt-3'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>

            <div className="categories-list-container mt-10 grid grid-cols-4 gap-5">
                {
                    categories.map((category) => <CategoryCard key={category.id} category={category}/>)
                }
                
            </div>
        </div>
    </section>
  )
}

export default Categories
