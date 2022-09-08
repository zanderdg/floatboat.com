import { Button, Typography, Table, Row, Col, Input,Radio } from "antd";


const FindFloat = () => {
  return (
    <div className="find-float">
      <div className="find-float-inner">
        <div className="header">
          <Typography.Title level={3}>GET STARTED</Typography.Title>
          <Typography.Title level={1}>Find your Float</Typography.Title>
          <p>
            Take the next step in buying a second home.
            <br /> We're excited to help you turn this dream into a reality, and
            we're
            <br /> here to support you with all the information you need to make
            it happen.
          </p>
        </div>
        <Row gutter={[40, 40]}>
          <Col xs={24} md={12}>
            <Input placeholder="Full Name*" />
          </Col>
          <Col xs={24} md={12}>
            <Input placeholder="Email*" />
          </Col>
          <Col xs={24} md={12}>
            <Input placeholder="Phone*" />
          </Col>
          <Col xs={24} md={12}>
            <Input placeholder="Dream Destination*" />
          </Col>
        </Row>
        <p>Select one of the following</p>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>I am a buyer</Radio>
          <Radio value={2}>I am a seller</Radio>
          <br />
          <Radio value={3}>I'm an agent or broker</Radio>
        </Radio.Group>
        <br />
        <Button type="primary">SUBMIT</Button>
        <p className="small">
          I give <strong>FLOAT</strong> permission to contact me & agree to the
          terms. This site is protected by reCAPTCHA and the Google{" "}
          <strong>privacy policy</strong>, <strong>terms of service</strong> and{" "}
          <strong>mobile terms</strong>.
        </p>
      </div>
    </div>
  );
};

export default FindFloat;
