import React from "react";

import {
  Button,
  Typography,
  Select,
  Divider,
  Row,
  Col,
  Input,
  Radio,
} from "antd";
import chatImg from "../assets/chat.png";

const DontMiss = () => {
  return (
    <div className="subscribtion-section">
      <Typography.Title level={1}>Connect with our Crew</Typography.Title>
      <p className="connect-crew-text">
        We’re excited to tell you more about this BOAT! We'll reach out shortly,
        or you can choose to contact us at a time that works for you. Ready to
        talk now? Call <strong>+1 234-567-8901</strong>.
      </p>
      <div className="subscribe">
        <Input placeholder="FULL NAME*" />
        <Input placeholder="EMAIL*" />
        <Input placeholder="PHONE*" />
        {/* <p>Select one of the following</p> */}
        {/* <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>I am a buyer</Radio>
          <Radio value={2}>I am a seller</Radio>
          <br />
          <Radio value={3}>I'm an agent or broker</Radio>
        </Radio.Group> */}
        <Button type="primary">CONNECT</Button>
        <p className="small">
          I give <strong>FLOAT</strong> permission to contact me & agree to the
          terms. This site is protected by reCAPTCHA and the Google{" "}
          <strong>privacy policy</strong>, <strong>terms of service</strong> and{" "}
          <strong>mobile terms</strong>.
        </p>
        {/* <img src={chatImg} height={"28"} /> */}
      </div>
    </div>
  );
};

export default DontMiss;
