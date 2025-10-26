import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('Form dubmitted by ' + title);
    setTitle('');

  }
  return (
    <div>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }}>
      <input type="text" placeholder='Enter your Name' 
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}/> <br />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App