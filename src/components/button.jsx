import {React}from 'react'
import {useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'


function Button() {
    const navigate = useNavigate();
    const close = () => {
      navigate(-1);
    }

    return(

        <button type="button" 
                      onClick={close}
                    class='ring-1 shadow-md bg-white m-3 rounded-lg'>
                        <ArrowLeftIcon className="h-8 w-8 m-4 font-bold text-2xl" aria-hidden="true" />
                      </button>


    )
}
export default Button;