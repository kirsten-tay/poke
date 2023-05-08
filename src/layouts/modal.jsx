import React from 'react'


const modal =()=>{
    return(
     
                         <div className=" h-1/3 w-1/4  rounded-1/2 bg-white p-3  shadow-xl">
                   <span className="flex justify-center font-bold m-2 text-2xl"> Choose Theme</span>
                   <div className=" h-full w-full m-4 flex items-center justify-center">
                   <button className="rounded-full bg-pink-500 w-20 h-20 m-4 focus:ring-1 "></button>
                   <div className="rounded-full bg-blue-500 w-20 h-20 m-4 "></div>
                   <div className="rounded-full bg-yellow-500 w-20 h-20 m-4 "></div>
                   </div>



         </div>
    )
}
export default modal;