import React, { useState } from "react";
import { Button, Modal } from "antd";
import PostPage from "../page/Post";

const HeaderFeed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="headerFeed--Content">
      <Button className="uploadBtn" onClick={showModal}>
        Share what's on your mind right now!
      </Button>

      <hr className="mt-5" />

      <div className="media--Content">
        <div className="media--Item">
          <Button className="mediaImg-Btn" type="" onClick={showModal}>
            <i className="fa-solid fa-hexagon-image" />
            Image
          </Button>
        </div>

        <div className="media--Item">
          <Button className="mediaImg-Btn" type="" onClick={showModal}>
            <i className="fa-thin fa-face-smile-hearts" />
            Emotion
          </Button>
        </div>

      </div>

      {/* Create a post */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <button key="cancel" onClick={handleCancel} className="cancleBtn">
            Cancel
          </button>,
          <button key="submit" className="postBtn">Post</button>,
        ]}
      >
        <h3 className="titleModal">Create a post</h3>
        <hr className=" hr-Modal" />
        <PostPage></PostPage>
      </Modal>
    </div>
  );
};

export default HeaderFeed;
