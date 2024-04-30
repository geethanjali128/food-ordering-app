import React from 'react'
import { CDN_URL } from '../../utils/constants'
import { addItem, decreaseItem, removeItem } from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartListItems = ({listItems}) => {
    


const cart=useSelector( store => store.cart)


const dispatch=useDispatch()

  const handleRemoveItem=(item)=>{
    dispatch(removeItem(item))
  }
  
  const handleDecreaseItem=(item)=>{
    dispatch(decreaseItem(item))
  }
  const handleIncreaseItem=(item)=>{
    dispatch(addItem(item))
  }



  return (
    <div>
       {
        listItems.map((item)=>(
          <div key={item.id}  className=' font-semibold border-b-2 border-slate-300  flex  md:justify-evenly  justify-between  gap-2  md:gap-10'>
            <div className=' w-full  md:w-5/12 relative'>
             <img src={CDN_URL+item.imageId}  alt='item-pic' className='rounded-md  w-32  md:w-40   h-20  md:h-28 my-3 object-cover' />
           </div>
             <div className=' w-fit md:w-7/12 align-self-center mt-10' >
            <span className='font-semibold '>{item.name}</span>
            <span className='text-gray-600'>-Rs.{(item.price || item.defaultPrice)/100}</span><br/>
             <button  onClick={()=>{handleRemoveItem(item)}}   className='text-green-700 font-bold' ><i class="bi bi-trash-fill"></i></button>
             </div>
              <div className='block font-bold  mt-10 w-52  md:w-48  h-10 px-1 pt-1 bg-slate-100 cursor-pointer'>
                <button className='mx-4' onClick={()=>{handleDecreaseItem(item)}}  >-</button>
                <span className='mr-4'>{item.cartQuantity}</span>
                <button onClick={()=>{handleIncreaseItem(item)}}>+</button>
              </div>
         
          <div className='pt-10 ml-3'>
            <p>{`total:Rs.${(item.price*item.cartQuantity)/100 || (item.defaultPrice*item.cartQuantity)/100}`}</p>
            </div>
            </div>
          
        ))
      }
     <div className='flex justify-between md:gap-0  gap-10 mt-5 font-bold '>
      <div>
      <h3 className=' text-xl md:text-3xl'>Total Amount:{cart.cartTotalAmount/100}</h3>
     <button className='bg-green-500 px-3 py-1 mt-3 rounded-sm'>Order Now</button>
     </div>
     <div>
      <h5 className=' text-lg md:text-xl'>Total Items:{cart.cartTotalQuantity}</h5>
     </div>
     </div>
    </div>
  )
}

export default CartListItems
