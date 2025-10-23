import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-10 h-[85vh]  flex align-center gap-10'>
        <LeftContent />
        <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content