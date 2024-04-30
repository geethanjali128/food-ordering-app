import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-xs sm:text-sm md:text-lg   flex justify-between bg-gray-100 shadow-2xl py-10 px-5 font-bold text-blue-400'>
        <h3 className='w-fit pr-3'>&copy;Copyright</h3>
          <ul className='flex justify-evenly gap-6 md:gap-5'>
            <li className='w-fit px-2'><Link to='/about'>About Us</Link></li>
            <li className='w-fit px-2'><Link to='/contact'>Contact Us</Link> </li>
            <li className='w-fit px-2'><Link to='#'> Visit Our Official Website</Link></li>
            </ul>
    </div>
  )
}

export default Footer
