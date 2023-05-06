import React from 'react'
import dino from './../../Assets/dino.svg' 
import dino2 from './../../Assets/dino2.svg'
import dino3 from './../../Assets/dino3.svg'
import dino4 from './../../Assets/dino4.svg'




const dashboard =()=>{
    return(
        <div>
            
                    <div className="grid grid-col-1 lg:grid-cols-4 p-10 gap-x-6 gap-y-10">
                        <div className=" border-2 p-5  bg-white rounded-xl  my-10 ">
                              <div className=" bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino} className="  item-center absolute  " />
                              </div>
                              <div className="flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                    charizard
                                </span>
                                <div className=" flex-row justify-between  space-x-6  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                               🔥 Fire
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                🦋 Flying
                 
                                </span>
                                </div>
                                </div>
                                
                        </div>
                    
                         <div className="  border-2 p-5  bg-white rounded-xl  my-10 ">
                              <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino2} className="  " />
                               </div> 
                               <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                ivysaur
                                </span>
                                <div className=" flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🌿 Grass
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                                </div>
                         </div>
                    
                    
                        <div className="  border-2 p-5  bg-white rounded-xl  my-10 ">
                            <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino3} className="  " />
                            </div> 
                            <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                raticate
                                </span>
                                <div className=" flex justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🐻 Normal   
                                </span>

                                </div>
                                </div>
                                
                         </div>
                    
                    
                            <div className="  border-2 p-5  bg-white rounded-xl my-10 ">
                             <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino4} className="  " />
                             </div>
                             <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                beedrill
                                </span>
                                <div className=" flex-row justify-between  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🐞 Bug
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                                </div>
                            </div>

                            <div className="  border-2 p-5  bg-white rounded-xl my-10 ">
                             <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino4} className="  " />
                             </div>
                             <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                beedrill
                                </span>
                                <div className=" flex-row justify-between  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🐞 Bug
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                                </div>
                            </div>
                           
                            <div className=" border-2 p-5  bg-white rounded-xl my-10 ">
                              <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino} className="   " />
                              </div>
                              <div className="flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                    charizard
                                </span>
                                <div className=" flex-row justify-between  space-x-6  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                               🔥 Fire
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                🦋 Flying
                 
                                </span>
                                </div>
                                </div>
                            </div>

                            <div className="  border-2 p-5  bg-white rounded-xl my-10 ">
                              <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino2} className="  " />
                               </div> 
                               <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                ivysaur
                                </span>
                                <div className=" flex-row justify-between  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🌿 Grass
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 py-2 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                                </div>
                         </div>

                         <div className="  border-2 p-5  bg-white rounded-xl my-10 ">
                            <div className=" bg-slate-100 h-40 w-full">
                                    <img src={dino3} className="  " />
                            </div> 
                            <div className=" flex-col m-7">
                                <span className="flex justify-center font-bold text-3xl">
                                raticate
                                </span>
                                <div className=" flex justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4 py-2 text-1xl   rounded-full text-black ">
                                🐻 Normal   
                                </span>

                                </div>
                                </div>
                                
                         </div>



                    </div>

                    
            </div>
        
        
               

            


        
    )
}
export default dashboard;
