import React from 'react'

const App = () => {

  //localStorage.clear()
  
  // localStorage.setItem('user', 'Niraj')
  // localStorage.setItem('age','18')

  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // console.log(user, age);

  const user = {
    user: 'niraj',
    age: 21,
    city: 'Mumbai'
  }

  const person = localStorage.setItem( user, JSON.stringify(user))

  const get = JSON.parse(localStorage.getItem(user))

  console.log(get);
  

  
  return (
    <div>App</div>
  )
}

export default App