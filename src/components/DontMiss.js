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
      <Typography.Title level={1}>
        Don't
        <span className="kaushan-general">Miss Out</span>
      </Typography.Title>
      <p>
        The best homes sell fast. See the latest listings, inspiring Luxury
        Boats and buying tips.
      </p>
      <div className="subscribe">
        <Input placeholder="EMAIL*" />
        <p>Select one of the following</p>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>I am a buyer</Radio>
          <Radio value={2}>I am a seller</Radio>
          <br />
          <Radio value={3}>I'm an agent or broker</Radio>
        </Radio.Group>
        <Button type="primary">SUBSCRIBE</Button>
        <p className="small">
          I give <strong>FLOAT</strong> permission to contact me & agree to the
          terms. This site is protected by reCAPTCHA and the Google{" "}
          <strong>privacy policy</strong>, <strong>terms of service</strong> and{" "}
          <strong>mobile terms</strong>.
        </p>
        <img src={chatImg} height={"28"} />
      </div>
    </div>
  );
};

export default DontMiss;
