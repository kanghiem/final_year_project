import React, { useState } from 'react'
import { Button, Dropdown, Space } from 'antd';
const Emotion = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <i class="fa-light fa-face-laugh-wink mr-2"></i>
              Happy
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                <i class="fa-light fa-face-angry mr-2"></i>
              Angry
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                <i class="fa-sharp fa-light fa-face-raised-eyebrow mr-2"></i>
              Surprised
            </a>
          ),
        },
      ];
  return (
    <div className='emotionContent'>

<Space direction="vertical">
    <Space wrap>
      
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <Button className='emotion--Btn'>
        <i className="fa-thin fa-face-smile-tongue emotion--Icon" />
        <span className="emotion--Text">Emotion</span>
        </Button>
      </Dropdown>
    </Space>
    
  </Space>

        {/* <Button type="" onClick={showModal} className='emotion--Btn'>
       
       
      </Button> */}
      
    </div>
  )
}

export default Emotion