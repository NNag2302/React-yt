import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.user);
  return (
    <div className='h-full shrink-0 flex flex-nowrap gap-10 w-2/3 p-6 '>
        
        {props.user.map(function(elem,idx){

          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}
        

    </div>
  )
}

export default RightContent