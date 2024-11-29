import React from 'react'
import HeaderFeed from './HeaderFeed'
import HeaderLeftFeed from './HeaderLeftFeed'
import FeedMain from './FeedMainComponent/FeedMain'

const Feed = () => {
  return (
    <div className='feed--Content '>
      <div className="header--Content">
        
        <HeaderFeed></HeaderFeed>
        <HeaderLeftFeed></HeaderLeftFeed>
      </div>
      <FeedMain></FeedMain>
    </div>
  )
}

export default Feed