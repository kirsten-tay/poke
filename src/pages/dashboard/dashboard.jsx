import React from 'react'
import dino from './../../Assets/dino.svg' 
import dino2 from './../../Assets/dino2.svg'
import dino3 from './../../Assets/dino3.svg'
import dino4 from './../../Assets/dino4.svg'
import Footer from "./../../layouts/footer.jsx";





const dashboard =()=>{
    return(
        <div>
            <div className='flex flex-row justify-center items-center w-full'>
                    <div className="grid grid-col-1 lg:grid-cols-4 px-16 gap-x-6 gap-y-5 ">
                        <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                              <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino} className="  justify-center h-50 w-40 " alt='poke' />
                              </div>
                              
                                <span className="flex justify-center  text-3xl">
                                    charizard
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2  m-5">
                                <span className="  items-center bg-slate-200 px-4  text-1xl h-6 rounded-full text-black ">
                               🔥 Fire
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                🦋 Flying
                 
                                </span>
                                </div>
                                
    

                        </div>
                    
                        <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                        <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino2} className="  " alt='poke' />
                               </div> 
                               
                                <span className="flex justify-center text-3xl">
                                ivysaur
                                </span>

                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🌿 Grass
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                                
                         </div>
                    
                    
                         <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                         <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino3} className="  " alt='poke'/>
                            </div> 
                            
                                <span className="flex justify-center  text-3xl">
                                raticate
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🐻 Normal   
                                </span>
                                </div>
                                
                         </div>
                    
                    
                         <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                         <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino4} className="  " alt='poke'/>
                             </div>
                                <span className="flex justify-center  text-3xl">
                                beedrill
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🐞 Bug
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                            </div>

                            <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                            <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino4} className="  " alt='poke' />
                             </div>
                                <span className="flex justify-center  text-3xl">
                                beedrill
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🐞 Bug
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                            </div>
                           
                            <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                            <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino} className="   "  alt='poke'/>
                              </div>
                                <span className="flex justify-center  text-3xl">
                                    charizard
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                               🔥 Fire
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                🦋 Flying
                 
                                </span>
                                </div>
                            </div>

                            <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                            <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino2} className="  " alt='poke'/>
                               </div> 
                                <span className="flex justify-center  text-3xl">
                                ivysaur
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🌿 Grass
                                </span>

                                <span className=" flex-row items-center bg-slate-200 px-4 h-6 text-1xl  rounded-full text-black ">
                                ☠️ Poison
                 
                                </span>
                                </div>
                         </div>

                         <div className="flex-row border-2 p-2  bg-white rounded-xl  w-80 h-72  my-10  ">
                         <div className=" flex justify-center bg-slate-100 h-40 rounded-xl w-2/1">
                                    <img src={dino3} className="  " alt='poke' />
                            </div> 
                                <span className="flex justify-center  text-3xl">
                                raticate
                                </span>
                                <div className=" flex flex-row justify-center  space-x-2 m-5">
                                <span className="  items-center bg-slate-200 px-4 h-6 text-1xl   rounded-full text-black ">
                                🐻 Normal   
                                </span>

                                </div>
                                
                         </div>



                    </div>

                    
        </div>
        <Footer/>
               

            
</div>

        
    )
}
export default dashboard;
