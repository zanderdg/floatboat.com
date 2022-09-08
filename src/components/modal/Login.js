import React, { useState } from "react";
import { Modal, Button, Input, Divider } from "antd";
import apple from "../../assets/social/apple.png";
import fb from "../../assets/social/fb.png";
import google from "../../assets/social/google.png";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <h2
        type="text"
        className="bottomBorder"
        style={{ cursor: "pointer" }}
        onClick={showModal}
      >
        SIGN UP / SIGN IN
      </h2>
      {/* <Button type="primary">Open Modal</Button> */}
      <Modal
        // title="Basic Modal"
        closable={false}
        centered
        width={"600px"}
        keyboard={false}
        maskClosable={true}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="login-main">
          <h4>SIGN UP / SIGN IN</h4>
          <h1>See Full Details</h1>
          <p className="head">
            Personalize your experience, unlock pricing details and more.
          </p>
          <Input placeholder="Enter your email address*" />
          <Button type="primary" className="btn-center">
            CONTINUE WITH EMAIL
          </Button>
          <Divider style={{ width: "20%" }}>or</Divider>

          <div className="custom-button">
            <Button
              icon={<img src={google} width="24px" height={"24px"} />}
              className="btn-center"
            >
              CONTINUE WITH GOOGLE
            </Button>
            <Button
              icon={<img src={apple} width="24px" height={"24px"} />}
              className="btn-center"
            >
              CONTINUE WITH APPLE
            </Button>
            <Button
              icon={<img src={fb} width="24px" height={"24px"} />}
              className="btn-center"
            >
              CONTINUE WITH FACEBOOK
            </Button>
          </div>
          <p className="small">
            I give FLOAT permission to contact me & agree to the terms. This
            site is protected by reCAPTCHA and the Google{" "}
            <strong>privacy policy</strong>, <strong>terms of service</strong>{" "}
            and <strong>mobile terms</strong>.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default App;
