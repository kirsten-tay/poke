import React from "react";
import { Outlet } from "react-router";
import Log from "../components/Log";
import Poke from "../components/Poke";
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'

const Authenticationlayout =()=>{
    return(
        <div>
            <nav className=' shadow-md  left-0 top-0 w-full   border-gray-200 '> 
            
          
               <div className="grid grid-col-1 lg:grid-cols-3 gap-x-6 px-12 py-2 justify-between ">
                  <div className="flex justify-center items-center  h-9 w-46 mx-20 ">
                      <Log className="flex absolute "/>
                     <Poke  />
                      </div>
                
                    <div className=" flex  border-2 border-slate-300 h-16 py-1 px-4  shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full ">
                       <label>
                       <MagnifyingGlassIcon className="text-slate-500 w-6 h-10   items-center"/> 
                           </label>
                        <input type={"search"}  className=" flex  items-center border-o outline-none rounded-full my-1 mx-1 p-1 w-full text-xl  placeholder-gray-500   " placeholder='Enter pokemon name'/>
                        
                      </div>
                       
                 <div className="flex justify-end px-9">
                       <div className='border w-16 h-16 rounded-full border-slate-700'>
                          <div className="rounded-full bg-pink-500 w-12 h-12 m-2 "></div>
                       </div>
                </div>
                </div>
           
                

            </nav>
             <div className="w-full h-screen bg-slate-100 " >
              <Outlet />
           
            </div>
           
          

        </div>
    )
}
export default Authenticationlayout;