import React from "react";
import Log from '../../components/Log.jsx'
import Poke from '../../components/Poke.jsx'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

const landing = ()=>{
    return (
        <div className="w-full bg-cover fixed bg-slate-100 p-10">
            <div className="flex justify-center pt-16">
            <Log />
            </div>
             <div className="flex flex-col items-center p-5   ">
             <Poke/>
                <div className="space-y-3 my-5 text-center">
                    <h1 className="font-medium text-1xl  "> Largest Pokémon index with information   </h1>
                    <h1 className="font-medium text-1xl"> about every Pokemon you can think of. </h1>
                </div>
                 
                      </div>
                      <div className="flex flex-col justify-center items-center my-10 pb-20">

                    <div className=' flex rounded-full w-1/3 p-1 border-8 border-pink-500'>
                        <div className="flex justify-between w-full"> 
                       <input type="search" class="flex w-full rounded-full px-3 bg-slate-100 py-2 text-2xl" placeholder='Enter pokemon name'/>
                       <Link to='/dashboard'  className=" relative item-center  inline-flex m-1 w-10 h-10 rounded-full bg-pink-500 ">
                      
                          <MagnifyingGlassCircleIcon className=" "/></Link>
                          
                          </div>
                    
                    </div>
                 
                
                    <Link to='/dashboard' className=' p-2 text-xl border-b border-slate-400 '>
                       view all</Link>
                </div>
                                

            </div>
            

        
    )
}
export default landing;
