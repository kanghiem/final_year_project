import React from 'react'
import Privacy from './Privacy'
import Emotion from './Emotion'

const HeaderPost = () => {
  return (
    <div className='headerPost'>
        <img className='avatar--Item' src="https://i.pinimg.com/736x/b7/d0/f6/b7d0f6e5fbb33910ec7b70978b4e5b9b.jpg" alt="" srcset="" />

        <div className="headerPost--Item">
            <h4 className='text--Username'>Felicia</h4>
            <div className="iconHeaderPost">

            <Privacy></Privacy>
            <Emotion></Emotion>


            </div>
            
        </div>
    </div>
  )
}

export default HeaderPost