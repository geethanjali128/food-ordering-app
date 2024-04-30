
import React, { useState } from "react"
import { LOGO_URL } from "../../utils/constants"
import Nav from "./Nav"


const Header=()=>{
    
   const[isOpen,setIsOpen]=useState(false)

    const toggleNav=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <>
        <div className="relative w-screen">
        <div className="   flex w-full flex-wrap md:flex-nowrap justify-between  md::text-lg bg-white shadow-lg">
            <div className=" -ml-10 md:-ml-0 w-48">
            <img  className="w-48" width='200px'     alt="logo" src={LOGO_URL}/>
            </div>
            <div className="hidden sm:hidden  md:hidden lg:block w-full mr-10">
                <Nav/>
            </div>
           <div className="lg:hidden text-blue-500 pt-1 px-1">
            <button onClick={toggleNav}>
               {isOpen?<i className="bi bi-x"></i>:<i className="bi bi-list"></i>} 
                </button>

           </div>
          </div>
        {isOpen && (
            <div className="flex flex-col basis-full">
            <Nav/>
            </div>
        )}
        </div>
        
        </>
    )
}


export default Header