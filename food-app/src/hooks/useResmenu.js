import { MENU_URL } from "../utils/constants"
import { useState,useEffect } from "react"

const useResmenu = (resId) => {
 const[resInfo,setResInfo]=useState(null)
  
      useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        try{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        
        setResInfo(json.data)

        }
        catch(error){
            console.log(error.message)
        }
    }
 
 return resInfo;
    
  
}

export default useResmenu;
