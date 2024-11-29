import React, {useState} from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
  console.log(e);
};

const BodyPost = () => {

  const [style, setStyle] = useState({
    color: '#000', // Màu mặc định
    borderColor: '#f87171', // Viền mặc định
    outline: 'none',
  });
  return (
    <div className='bodyPost--Content'>
  <br />
    <TextArea
    
    showCount
        maxLength={250}
        placeholder="Share what's on your mind right now!"
        allowClear
        onChange={() => {}}
        style={{
          ...style,
          transition: 'all 0.3s', // Tạo hiệu ứng chuyển đổi mượt
        }}
        onMouseEnter={() => setStyle({ color: '#f87171', borderColor: '#f87171' })}
        onMouseLeave={() => setStyle({ color: '#000', borderColor: '#d9d9d9' })}
        onFocus={() => setStyle({ color: '#020617', borderColor: '#f87171' })}
        onBlur={() => setStyle({ color: '#000', borderColor: '#d9d9d9' })}/>
      <br />

        

    </div>
  )
}

export default BodyPost