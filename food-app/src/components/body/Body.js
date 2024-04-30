import React from 'react'
import Rescard from '../restaurants/Rescard'
import { useState,useEffect } from 'react'
import { SWIGGY_URL } from '../../utils/constants'
import Shimmer from '../shimmerui/Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../hooks/useOnlineStatus'

const Body = () => {
  const[listOfRes,setListOfRes]=useState([])
  const[filteredRes,setFilteredRes]=useState([])
  const[search,setSearch]=useState("")

const onlineStatus=useOnlineStatus()


  useEffect(()=>{
   !listOfRes.length && fetchData()
  },[])

  const fetchData= async()=>{
    try{
    const data=await fetch(`${SWIGGY_URL}`)   //https://proxy.cors.sh/
    const json= await data.json()
    
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
    
    }
    catch(error){
      console.log(error.message)
    }
  }
  
  if(onlineStatus===false) return <h1>You are Offline! please check your internet</h1>



  return  listOfRes.length===0?
  (
    <Shimmer/>
  )
  : 
  (
    <div>
      <div className='mt-8 '>
      <div className='flex md:justify-center justify-evenly  gap-20 md:gap-24 text-xs md:text-lg'>
        <div className='flex gap-1'>
          {/* search input to filter restaurants based on searched food items */}
          <input  
          className='border-2 border-slate-900 md:w-80 ml-2 md:ml-0 px-1  md:py-1 rounded-sm '        type='text' 
          placeholder='search here for restaurants' name='cuisine'
           value={search}
          onChange={(e)=>{setSearch(e.target.value)}} />
          {/* search button */}
        <button className='bg-green-400 px-4 md:py-1 rounded-sm  md:ml-2 '
         onClick={()=>{setFilteredRes(listOfRes.filter( res => res.info.cuisines.join(",").toLowerCase().includes(search.toLowerCase())))}}>Search</button>
        </div>
        {/* filtered restaurants */}
        <div className='mr-2 md:mr-20'>
        <button className='bg-yellow-500 px-5 py-1 rounded-sm align-self-center'
        onClick={()=>{
          setFilteredRes(listOfRes.filter( restaurant => restaurant.info.avgRating>4))
         }}>Top Rated Restaurants</button>
      </div>
      </div>
     
      </div>
      <div className='mt-10  lg:grid-cols-4  lg:gap-5 md:grid md:grid-cols-2  md:gap-5  md:mx-20  lg:mx-16 mx-20 flex flex-col justify-center '>
        {filteredRes.map( resItem =>
           <Link key={resItem.info.id} to={'/Restaurants/'+resItem.info.id}>
             <Rescard  resData={resItem}/> 
           
            </Link>    )}
      
        
        
      </div>
    </div>
  )
}

export default Body
