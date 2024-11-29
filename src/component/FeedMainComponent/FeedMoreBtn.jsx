import React from 'react'
import { Button, Dropdown, Space } from 'antd';

const FeedMoreBtn = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Add to favorites
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Go to post
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              About this account
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Report
            </a>
          ),
        },
        {
          key: '5',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Follow
            </a>
          ),
        },
        {
          key: '6',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Cancle
            </a>
          ),
        },
      ];
  return (
    <div>
        <Space direction="vertical">
    <Space wrap>
      
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <Button className='feedMore--Btn'>
       <i className="fa-sharp-duotone fa-thin fa-ellipsis more--IconItem" />

</Button>
      </Dropdown>
    </Space>
    
  </Space>
    </div>
  )
}

export default FeedMoreBtn