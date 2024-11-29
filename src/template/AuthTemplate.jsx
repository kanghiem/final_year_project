import React from 'react'
import LoginPage from '../page/Login'
import { Outlet } from 'react-router-dom'

const AuthTemplate = () => {
  return (
    <div className='authTem--Content'>
        <div className="auth--Content"></div>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthTemplate