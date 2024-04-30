import { useEffect, useState } from "react"


const useOnlineStatus = () => {
    const[onlineStatus,setOnlinStatus]=useState(true)

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlinStatus(false)
        })
        window.addEventListener('online',()=>{
            setOnlinStatus(true)
        })
    },[])



  return onlineStatus
}

export default useOnlineStatus
