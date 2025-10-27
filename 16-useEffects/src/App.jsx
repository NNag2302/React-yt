import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChange() {
    console.log('A ki value change ho gaye');
  }

  function bChange() {
    console.log('B ki value change ho gaye');
  }

  useEffect(function(){
    aChange();
    
    
  },[a])

  return (
    <div>
      <h1>value of a is {a}</h1>
      <h1>value of b is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >change A</button>
      <button
      onClick={()=>{
        setB(b+1)
      }}
      >change B</button>
    </div>
  )
}

export default App