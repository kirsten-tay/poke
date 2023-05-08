import React from "react";
import { Outlet } from "react-router";
import Modal from '../layouts/modal'
import Log from "../components/Log";
import Poke from "../components/Poke";
import { Disclosure } from "@headlessui/react";
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'


const Authenticationlayout =()=>{
    return(
   
        <div class=' w-screen fixed h-screen'>
            <nav className=' w-full shadow-md  left-0 top-0    border-gray-200 '> 
            
          
               <div className="grid grid-col-1 lg:grid-cols-3 gap-x-6 px-12 py-2 ">
                  <div class=" relative p-2 sm:mx-auto sm:max-w-lg   h-20 w-full  ">
                  <div class="flex relative mx-auto max-w-7xl  w-80">
                      <Log className="absolute "/>
                     <Poke className="absolute " />
                      </div>
                      </div>
                <div class=" relative p-2 sm:mx-auto sm:max-w-lg   h-20 w-full  ">
                    <div className=" flex  border-2 border-slate-300 h-16 py-1 px-4  shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full ">
                       <label>
                       <MagnifyingGlassIcon className="text-slate-500 w-6 h-10   items-center"/> 
                           </label>
                        <input type={"search"}  className=" rounded-full  w-full px-3 text-xl  placeholder-gray-500   " placeholder='Enter pokemon name'/>
                        
                      </div>
                       </div>
                       
                     < div class=" flex p-2 sm:mx-auto sm:max-w-lg justify-end   h-20 w-full  ">
                     <Disclosure >
              {({open }) => (
            <>
                <Disclosure.Button type='button'className='relative z-10 flex border w-16 h-16 rounded-full border-slate-700'>
                          <div className="rounded-full bg-pink-500 w-12 h-12 m-2 ">
                          <Disclosure.Panel >
                          <div class="fixed inset-0 bg-gray-500 flex items-center justify-center bg-opacity-75 transition-opacity">
                           <Modal/>
                          </div>
                          </Disclosure.Panel >
                          </div>
                     
                     </Disclosure.Button>
                     </>
                     )}
                     </Disclosure>

                     </div>
                
           </div>
                

            </nav>
             <div className=" bg-slate-100 " >
              <Outlet />
           
            </div>
           
          

        </div>
    )
}
export default Authenticationlayout;