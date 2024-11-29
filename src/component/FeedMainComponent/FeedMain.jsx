import React , { useState } from "react";
import FeedMoreBtn from "./FeedMoreBtn";
import { Carousel, Switch, Typography } from "antd";

const contentStyle = {
  margin: 0,
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
 height: "660px"
  
};

const { Paragraph } = Typography;






const FeedMain = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="feedMain--Content">
      <div className="feedMain--Item">
        <div className="head--Item">
          <div className="item--Content">
            <img
              className="avatar--Item"
              src="https://i.pinimg.com/736x/76/e2/c9/76e2c9a5bc36961852640e3f4a3af967.jpg"
              alt=""
              srcset=""
            />
            <p className="text--Username">Lee Jong Suk</p>
            <div className="circle--item"></div>
            <p className="text--hours">7h</p>
          </div>
          <FeedMoreBtn></FeedMoreBtn>
        </div>

        <Carousel arrows infinite={false}>
          <div>
            <img className="img--Slide" style={contentStyle} src="https://i.pinimg.com/736x/cc/08/c4/cc08c4f355354d65e8f81e0d203e1369.jpg" alt="" srcset="" />
            
          </div>
          <div>
            <img style={contentStyle} className="img--Slide" src="https://i.pinimg.com/736x/28/9a/b4/289ab4377587cd4c40e36411060d07c1.jpg"
             alt="" srcset="" />
            
          </div>
          <div>
            <img style={contentStyle} className="img--Slide" src="https://i.pinimg.com/736x/68/52/70/685270b702dc72c7c0ddd380e35b8c04.jpg"
             alt="" srcset="" />
            
          </div>
          <div>
            <img style={contentStyle} className="img--Slide" src="https://i.pinimg.com/736x/77/f8/ed/77f8edeeb10ef5c58687becd3b43a95d.jpg"
             alt="" srcset="" />
            
          </div>
        </Carousel>

        <div className="interact--item">

          <div className="interact--content">
          <i className="fa-thin fa-circle-heart interact--Icon--item" />

          <i className="fa-thin fa-message-dots interact--Icon--item" />

          </div>
          <i className="fa-thin fa-bookmark interact--Icon--item" />



        </div>

        <p className="textTitle">1000 likes</p>

        <Paragraph
        ellipsis={
          !expanded
            ? { rows: 2, expandable: false } // Rút gọn văn bản khi chưa mở rộng
            : false // Hiển thị toàn bộ khi đã mở rộng
        }
      >
        <span className="text--Username mr-8">Lee Jong Suk</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus molestiae adipisci officia minus aliquam quos? Quaerat quia dicta in dignissimos sint nulla expedita temporibus similique doloribus alias voluptatibus culpa, repudiandae saepe, consequuntur impedit dolores doloremque necessitatibus adipisci at quae! Alias natus molestias unde ex enim asperiores velit esse facere praesentium, perferendis cum, non provident animi ipsam et quaerat saepe.
      </Paragraph>
      
      <span
        style={{ color: '#a1a1aa', cursor: 'pointer', fontSize: '12px'}}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'hide' : 'more'}
      </span>
       
      </div>
    </div>
  );
};

export default FeedMain;
