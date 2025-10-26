import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
  }
  return (
    <div className='h-screen flex flex-col bg-black text-white lg:flex font-mono'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}
      className='flex flex-col items-start lg:w-1/2  gap-5 px-5 py-10 '>
        <input 
        type="text" 
        placeholder='Enter Notes Here'
        className='border-2 w-1/2 rounded-2xl px-5 py-7 '
        />
        <textarea 
        type="text" 
        placeholder='Enter Details Here'
        className='border-2 h-32 w-1/2 rounded-2xl px-5 py-7 '
        />

        <button 
        className='bg-gray-50 w-1/2  rounded-2xl text-black px-5 py-7'
        >
        Add Notes
        </button>
        </form>

        <div className='flex flex-wrap  p-5'>
          <div className='h-52 w-40  rounded-2xl lg:w-1/2 bg-white'></div>
        </div>
      
    </div>
  )
}

export default App