import React from 'react'
import { CDN_URL } from '../../utils/constants'
import {useDispatch} from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const CategoryListItems = ({listItems}) => {
   

    const dispatch=useDispatch()
    const navigate=useNavigate()

  const handleAddItem=(item)=>{
    // dispatch action
    dispatch(addItem(item))
    navigate('/cart')
  }


  return (
    <div>
      {
        listItems.map((item)=>(
          <div key={item.card.info.id}  className='border-b-2 border-slate-300 py-4 mx-3 flex justify-between align-items-center   gap-2 font-sans'>
             <div className='w-8/12  md:w-9/12 align-self-center mt-6' >
            <span className='font-semibold '>{item.card.info.name}</span>
            <span className='text-slate-800'>-Rs.{(item.card.info.price || item.card.info.defaultPrice)/100}</span>
              <p className='  hidden md:block text-sm my-3'>{item.card.info.description}</p>
              </div>
            <div className=' w-4/12 md:w-3/12 relative'>

            <img src={CDN_URL+item.card.info.imageId}  alt='item-pic' className='rounded-md  w-40  h-28   mt-3 object-cover' />
            <div className='absolute bottom-0 font-semibold   md:left-12 bg-white rounded-md px-3 '>
            <button className='text-green-700 font-bold ' onClick={()=>{handleAddItem(item.card.info)}}  >+Add</button>
            </div>
            </div>
           
            </div>
          
        ))
      }
     
    </div>
  )
}

export default CategoryListItems;
