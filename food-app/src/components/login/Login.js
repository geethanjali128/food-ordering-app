
import React, { useEffect, useState } from 'react'
import {auth,provider} from '../../utils/firebase'
import { signInWithPopup } from 'firebase/auth'
import { GOOGLE_URL } from '../../utils/constants'

const Login = () => {

    const[value,setValue]=useState("")

    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then( data =>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            console.log(data.user)
        })
        .catch((error)=>{
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
         console.log(errorMessage)
        // The email of the user's account used.
            const email = error.customData.email;
            console.log(email)
        })
       
    }


    useEffect( ()=>{
        setValue(localStorage.getItem('email'))
    },[])


   


  return (
    <div className=' text-gray-100  bg-green-300 py-2  mx-auto  rounded-full  w-10/12 md:w-4/12  px-10 mb-[500px] mt-36 md:mb-60  flex  justify-center align-content-center  font-bold  text-2xl md:text-3xl'>
        
        <button className='   '   onClick={handleLogin}>
            Login with Google
        </button>
         <img  className='mx-1  w-12  md:w-14 rounded-full'  src={GOOGLE_URL} alt='google logo'/>
       
      </div>
  )
}

export default Login
