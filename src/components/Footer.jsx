import React from 'react'
import { explore, category } from '../assets/footerInfo/footer'
import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <section className='footer-section flex justify-center items-center h-[90vh]' id='footer-wrapper'>
      <div className='footer-container grid grid-cols-4   gap-10 w-[85%]'>
            <div className="contact-us-container">
                <h2 className="font-semibold text-2xl mb-4 border-b border-b-green-300 pb-2 w-[50%]">Contact Us</h2>
                <span className='py-2 text-sm text-gray-500'>Call: +123 400 123</span>
                <p className='py-2 text-sm text-gray-500 '>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                <p className='py-2 text-sm font-semibold'>Email: example@gmail.com</p>
                <div className="social-links-container">
                    <FooterSocial/>
                </div>
            </div>
            <div className="explore-container ">
                <h2 className="font-semibold text-2xl mb-4 border-b border-b-green-300 pb-2 w-[40%]">Explore</h2>
                {
                    explore.map((data, id) => (
                        <li key={id} className='py-2 capitalize text-gray-600 font-semibold'>{data}</li>
                    ))
                }
            </div>
            <div className="category-container">
                <h2 className="font-semibold text-2xl mb-4 border-b border-b-green-300 pb-2 w-[40%]">Category</h2>
                {
                    category.map((data, id) => (
                        <li key={id} className='py-2 capitalize text-gray-600 font-semibold'>{data}</li>
                    ))
                }
            </div>
            <div className="subscribe-container">
                <h2 className="font-semibold text-2xl mb-4 border-b border-b-green-300 pb-2 w-[40%]">Suscribe</h2>
                <p className='py-2'>Lorem Ipsum has been them an industry printer took a galley make book.</p>
                <form action="" className='py-2'>
                    <input type="email" className='py-2 px-2 bg-gray-100 outline-none rounded-sm placeholder:text-sm focus:outline-green-500' placeholder='Email here' />
                </form>
                <button className=' my-2 bg-green-500 px-3 py-2 text-white rounded-md'>Subscribe Now</button>
            </div>
      </div>
    </section>
  )
}

export default Footer
