import React from 'react'
import Navbar from '../../component/Navbar'
import Feed from '../../component/Feed'
import SearchPage from '../Search'

const HomePage = () => {
  return (
    <div className='home--Content'>

        <Navbar></Navbar>
        
        <Feed></Feed>
        <SearchPage></SearchPage>

    </div>
  )
}

export default HomePage