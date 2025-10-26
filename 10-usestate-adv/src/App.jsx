import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState([10,20,30])

  const changeNum = () => {
    const newNum = [...num]

    newNum.push(100)
    setnum(newNum)
  }
  return (
    <div>

      <h1>{num}</h1>
      <button onClick={changeNum}>Click Me</button>
    </div>
  )
}

export default App