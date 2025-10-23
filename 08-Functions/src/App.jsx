import React from 'react'

const App = () => {

    const pageScrolled = () => {
      console.log("scrolled");
    }
  

  return (
    <div>
      <div onWheel={(elem) =>{
        console.log(elem.deltaY);
      }}>
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>
      </div>
    </div>
  )
}

export default App