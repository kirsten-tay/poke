import {React,Fragment} from 'react'
import { ChevronDownIcon, ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';

const footer=()=>{
    return(
         <div>
            <div className=" flex flex-row justify-between  p-10    ">
                <div className="flex  items-center justify-between my-8">
                    <div className="inline-flex  w-full  gap-2  ">
                        <button type="button" className="items-center px-2 py-2 border-2 rounded-xl bg-slate-300">
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
            
                  <button
                    href="#"
                    aria-current="page"
                        className="  items-center bg-slate-300 px-4 py-2 text-sm rounded-xl text-white focus-">
                        1 
                  </button>
                  <button
                     href="#"
                       className="ritems-center bg-slate-300 px-4 py-2 text-sm  rounded-xl text-black focus-">
                             2
                           </button>
                        
                       <button
                       href="#"
                         className="ritems-center bg-slate-300 px-4 py-2 text-sm  rounded-xl text-black focus-">
                               3
                             </button>

                             <button
                     href="#"
                       className="ritems-center bg-slate-300 px-4 py-2 text-sm  rounded-xl text-black focus-">
                             4
                           </button>
                    <span className="relative inline-flex items-center px-1 py-2 text-sm font-semibold text-gray-700  focus:outline-offset-0">
                        ....
                        </span>

                        <button
                     href="#"
                       className="ritems-center bg-slate-300 px-3 py-2 text-sm  rounded-xl text-black focus-">
                             12
                           </button>

                           <button type="button" className="items-center px-2 py-2 border-2 rounded-xl bg-slate-300">
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    
                </div>
                </div>
              
                <Menu className="flex">
                    <Fragment>
                    <Menu.Button type="button" className="inline-flex w-24 h-12 border-2 p-1.5 justify-between rounded-md  bg-slate-200">
                        <span className="bg-white h-8 w-10 text-2xl rounded-md  px-2">
                            8
                        </span>
                        <ChevronDownIcon class="item-center h-6 w-6 "/>
                    </Menu.Button>

                    <Menu.Items>
                        <Menu.Item>
                            8
                        </Menu.Item>

                        <Menu.Item>
                            8
                        </Menu.Item>
                    </Menu.Items>
                    </Fragment>
                </Menu>

                 
           

       </div>
       </div>
    )
}
export default footer;