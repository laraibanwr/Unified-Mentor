import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const Modal = ({handleClose,content,header}) => {
  return (
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0 flex justify-center'>
        <div className='w-1/2 bg-white rounded-lg h-fit mt-32 p-5'>
            <div className='flex justify-between '>
                {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}
            </div>
            <div className='mt-10'>
                {content}
            </div>
        </div>
    </div>
  )
}

export default Modal