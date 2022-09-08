import { Typography, Row, Col, Button, Input, Radio } from "antd";
import Layout from "../Layout/Layout";

const Listing = () => {
  return (
    <Layout active={"contact"} faq={false} scroll={false} showHeader={false}>
      <div className="contact-main">
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={8}>
            <Typography.Title level={1}>Own The Joy</Typography.Title>
            <Typography.Title level={2}>
              Your luxury float is waiting
            </Typography.Title>
            <p>
              Take the next step in buying a second home. We're excited to help
              you turn this dream into a reality, and we're here to support you
              with all the information you need to make it happen.
            </p>
          </Col>
          <Col xs={24} lg={16}>
            <Row gutter={[50, 30]}>
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

              <Col xs={24}>
                <p>Select One of the Following</p>
                <Radio.Group>
                  <Radio value={1}>I am a buyer</Radio>
                  <Radio value={2}>I am a seller</Radio>
                  <Radio value={3}>I am an agent or broker</Radio>
                </Radio.Group>
              </Col>

              <Col xs={24}>
                <p>
                  <strong>Drop us a line (Optional) :</strong>
                </p>
                <Input.TextArea
                  rows={5}
                  style={{ resize: "none", border: "1px solid black" }}
                />
              </Col>

              <Col xs={24}>
                <Button type="primary">CONTACT ME</Button>
                <p className="contact-small">
                  I give FLOAT permission to contact me & agree to the terms.
                  This site is protected by reCAPTCHA and the Google privacy
                  policy, terms of service and mobile terms.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Listing;
