import { Button, Typography, Table, Row, Col, Input, Radio } from "antd";

const FindFloat = () => {
  return (
    <div className="find-float">
      <div className="find-float-inner">
        <div className="header">
          <Typography.Title level={3}>START EARNING</Typography.Title>
          <Typography.Title level={1}>Connect with our Crew</Typography.Title>
          <p>
            Want to learn more about our program? Have an interested buyer?
            Let’s talk.
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
            <Input placeholder="Primary Markets*" />
          </Col>
          <Col xs={24}>
            <p>Drop us a line (optional)</p>
            <Input.TextArea
              rows={6}
              style={{ resize: "none", border: "1px solid black" }}
            />
          </Col>
        </Row>
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
