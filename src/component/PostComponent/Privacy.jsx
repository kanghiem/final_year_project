import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import PrivacySetting_Page from '../../page/PrivacySetting';

const Privacy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
        <Button type="" onClick={showModal} className='privacy--Btn'>
        <i className="fa-thin fa-earth-americas privacy--Icon" />
        <span className="privacy--Text">Public</span>
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel}
      footer={[
        <button key="cancel" onClick={handleCancel} className="cancleBtn">
          Cancel
        </button>,
        <button key="submit" className="saveBtn">Save</button>,
      ]}>
        <PrivacySetting_Page></PrivacySetting_Page>
      </Modal>
    </div>
  )
}

export default Privacy