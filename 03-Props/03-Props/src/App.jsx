import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Niraj Nagpurkar' age='21' img='https://images.unsplash.com/photo-1755644500195-bcc086dcd4ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
      <Card user='Naman Singh' age='20' img='https://images.unsplash.com/photo-1760208181371-c0fa9e570c20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=751'/>
      <Card user='Aman Singh' age='22' img='https://images.unsplash.com/photo-1760544470633-eca1413ccfe1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175'/>
      <Card user='Sarthak Sholk' age='23' img='https://images.unsplash.com/photo-1760484376456-7a2638df0ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685'/>
    </div>
  )
}

export default App