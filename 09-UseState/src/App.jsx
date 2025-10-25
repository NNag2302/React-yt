import React, { useState } from 'react'

const App = () => {

  const [num,setnum] = useState(0)

  function increase() {
    setnum( num + 1)
  }

  function decrease() {
    setnum( num - 1)
  }

  function by5() {
    setnum( num + 5)
  }

  function reset() {
    setnum(0)
  }

  return (
    <div>

      <h2>{num}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={by5}>Increase by 5</button>
      <button id='reset' onClick={reset}>reset</button>
    </div>
  )
}

export default App