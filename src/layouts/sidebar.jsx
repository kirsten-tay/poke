import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import dino2 from './../Assets/dino2.svg'
import Button from './../components/button.jsx'

const sidebar =()=>{
   
  
    return(
        <div>
      <div className=" w-full h-full absolute flex item-center justify-end  ">
        
              
                <div className="  h-full w-1/3  text-black bg-white p-3  shadow-xl">
                  <div class=' relative h-1/3 rounded-xl  bg-gradient-to-t from-cyan-800 to-cyan-300 shadow-md'>
                     <div class='flex justify-start'>
                     <Button/>

                     </div>
                      <img src={dino2} alt="poke" class=" h-full w-full  -bottom-20 absolute  mx-auto"/>
                  </div>
                
                  <span className="flex justify-center font-bold mt-20  text-5xl"> ivysaur</span>

               <div className=" flex flex-row justify-center  space-x-2  m-5">
              <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🌿 Grass </span>

              <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black ">☠️Poison</span>

              </div>

                   <span className="flex justify-center font-bold m-4 pt-20 text-2xl"> ivysaur</span>


                    
                    
                  
                   
                  </div>
              
              </div>
           

       
    </div>






    )
}
export default sidebar;

