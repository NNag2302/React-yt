import React from 'react'
import {Link} from "react-router-dom";

const pages = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link>About us</Link>
        <Link>Contact Us</Link>
    </div>
  )
}

export default pages