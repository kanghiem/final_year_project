import React from 'react'
import HeaderPost from '../../component/PostComponent/HeaderPost'
import BodyPost from '../../component/PostComponent/BodyPost'
import FooterPost from '../../component/PostComponent/FooterPost'

const PostPage = () => {
  return (
    <div>
        <HeaderPost></HeaderPost>
        <BodyPost></BodyPost>
        <FooterPost></FooterPost>
    </div>
  )
}

export default PostPage