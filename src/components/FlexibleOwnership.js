import { Row, Typography,Col,Button } from "antd";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const FlexibleOwnership = () => {
  return (
    <div className="flexible-ownership">
      <div className="top-head">
        <Typography.Title level={5}>FLEXIBLE OWNERSHIP</Typography.Title>
        <Typography.Title level={2}>
          Make your move, on your terms
        </Typography.Title>
        <p>
          Whether you own a Float or a whole boat, we make it easy to move or
          <br />
          sell when you're ready.
        </p>
      </div>
      <div className="content">
      <Row gutter={[40,40]} justify="space-around">
        <Col xs={24} md={12} lg={7}>
          <div className="desc-section">
            <img src={icon1} />
            <div>
              <Typography.Title level={2}>Transfer</Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} lg={7}>
          <div className="desc-section">
            <img src={icon2} />
            <div>
              <Typography.Title level={2}>Resale</Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} lg={7}>
          <div className="desc-section">
            <img src={icon3} />
            <div>
              <Typography.Title level={2}>Selldown</Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      </div>
      <Button type="primary" className="btn-center">SEE YOUR OPTIONS</Button>
    </div>
  );
};

export default FlexibleOwnership;
