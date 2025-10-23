import React from 'react'

const RightCardContent = (props) => {
  return (
    <div id="right" className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'> 
            <h2 className='bg-white h-12 w-12 rounded-full font-semibold text-xl flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-xl mt-35 leading-relaxed text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum nulla, odio molestias voluptatibus iste perspiciatis aliquid fugiat voluptatem sint!</p>
            </div>
            <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white px-4 py-4 rounded-full font-medium'>
                {props.tag}
            </button>
            <button style={{backgroundColor:props.color}}className='bg-blue-500 text-white px-4 py-4 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardContent