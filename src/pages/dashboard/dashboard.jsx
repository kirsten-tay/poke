import React from 'react'
import dino from './../../Assets/dino.svg' 
import dino2 from './../../Assets/dino2.svg'
import dino3 from './../../Assets/dino3.svg'
import dino4 from './../../Assets/dino4.svg'
import Footer from "./../../layouts/footer.jsx";
import { Disclosure } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/20/solid'
import Sidebar from '../../layouts/sidebar'




const dashboard =()=>{
    
    return(
        <div class=" w-screen h-screen  p-20 pb-0 ">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-4 p-10">
              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60 ">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> charizard</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-3">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🔥 Fire </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black ">🦋 Flying</span>

                        </div>
                </div>
              </div>
              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">

              <Disclosure >
              {({open }) => (
            <>
                <Disclosure.Button  class="mx-auto max-w-7xl flex-1 w-60" >
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino2} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> ivysaur</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🌿 Grass </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black ">☠️Poison</span>

                        </div>
                                      
              <Disclosure.Panel >
                 <div>
              
              <button type="button" onclick="openSidebar()"
        className=" 
        relative z-10 flex items-center w-full justify-between bg-pink-500 hover:bg-pink-500 p-2 h-10 m-2 text-1xl pb-3 rounded-full text-white ">View Pokemon 
        <EyeIcon class="h-6 w-6 " /> 
         <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <Sidebar/>
         </div>

                      </button>
</div>
              </Disclosure.Panel>
              </Disclosure.Button>

            </>
          )}
        </Disclosure>
        </div>
       
                       
   
              
              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino3} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> raticate</span>
                      <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black "> 🐻 Normal   </span>
                      </div>
                </div>
              </div>
              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino4} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> beedrill</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🐞 Bug</span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black "> ☠️ Poison</span>

                        </div>
                </div>
              </div>

              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino4} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> beedrill</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🐞 Bug</span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black "> ☠️ Poison</span>

                        </div>
                </div>
              </div>

              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> charizard</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🔥 Fire </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black ">🦋 Flying</span>

                        </div>
                </div>
              </div>

              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino2} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> ivysaur</span>
                        <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black "> 🌿 Grass </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl pb-3 rounded-full text-black ">☠️Poison</span>

                        </div>
                </div>
              </div>

              <div class="relative bg-white p-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-2">
                <div class="mx-auto max-w-7xl flex-1 w-60">
                   <div class="bg-gray-200 h-40 w-full flex-1 rounded-xl relative">
                      <img src={dino3} alt="poke" class="  absolute -top-12 right-0 left-0  mx-auto"/>
                   </div>
                      <span className="flex justify-center pt-1 text-3xl"> raticate</span>
                      <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black "> 🐻 Normal   </span>
                      </div>
                </div>
              </div>
      
      </div>
        <Footer/>
               
                        
                                
                               
                                
                                
    

                        
                    
                        
                        
                    
                    

                               
                                
                         




                    

            
</div>

        
    )
}
export default dashboard;
