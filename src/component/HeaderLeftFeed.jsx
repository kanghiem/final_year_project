import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderLeftFeed = () => {
  return (
    <div>
        <NavLink className={'loginBtn'} to={"/login"}>Sign In</NavLink>
    </div>
  )
}

export default HeaderLeftFeed