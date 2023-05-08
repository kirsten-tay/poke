import {React}from 'react'
import { EyeIcon } from '@heroicons/react/20/solid'
import Sidebar from "./../layouts/sidebar"


function Viewbutton() {
   

    return(
          <div>
               {({ open }) => (
          <>
        <button type="button" onclick="openSidebar()"
        className=" 
        flex items-center w-full justify-between bg-pink-500 hover:bg-pink-500 p-2 h-10 m-2 text-1xl pb-3 rounded-full text-white ">View Pokemon 
        <EyeIcon class="h-6 w-6 " />
                      </button>
                        
       </>
               )}
</div>
    )
}
export default Viewbutton;