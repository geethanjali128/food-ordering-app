import React from 'react'
import { CDN_URL } from '../../utils/constants'

const Rescard = ({resData}) => {
    const{name,cuisines,avgRating,areaName,sla,cloudinaryImageId}=resData?.info
  return (
    <div className='w-60 h-[350px] hover:shadow-2xl   hover:rounded-sm  mb-5  md:mb-3'>
      <img  className='h-48  w-60 rounded-sm rounded-t-md object-cover shadow-xl '  alt={name} src={CDN_URL+cloudinaryImageId}/>
      <div className='px-1 pb-1 '>
      <h4 className='font-bold mt-2 text-lg'>{name}</h4>
      <div className='flex justify-between font-medium'>
      <h5 className='bg-yellow-600 px-2 rounded-lg '><i className="bi bi-star-fill"></i><span className='pl-1 pt-1'>{avgRating}</span></h5>
      <h6 className='text-sm'>{sla.deliveryTime} min</h6>
      </div>
      <p className='text-gray-600 overflow-x-hidden'>{cuisines.join(",")}</p>
      <p className='text-gray-500 pb-5'>{areaName}</p>
    </div>
    </div>
  )
}



export default Rescard
