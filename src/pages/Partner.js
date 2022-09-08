import { Typography, Row, Col, Button, Input, Radio } from "antd";
import Layout from "../Layout/Layout";
import VideoSection from "../components/VideoSection";
import ConnectCrewForm from "../components/ConnectCrewForm";
import Banner from "../assets/mobile.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import Videosample from "../assets/partner1.png";
import Videosample2 from "../assets/partner2.png";
import mainHeader from "../assets/partner-main.png";

import icon3 from "../assets/icon3.png";
import advantage from "../assets/advantage.png";
import understanding from "../assets/understanding.png";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Listing = () => {
  return (
    <Layout active={""} faq={true} scroll={false} showHeader={false}>
      <div className="partner-main">
        <div className="header">
          <div className="top">
            <Typography.Title level={1}>
              Your Big Opportunity In Float
            </Typography.Title>
            <p>
              Are you an innovative agent looking for more sales opportunities?
              We make it easy for you to earn generous commissions and delight
              clients.
            </p>
          </div>

          <img src={mainHeader} width="100%" />
        </div>

        <div className="flexible-ownership">
          <Typography.Title level={1}>
            How We Boost Your Business
          </Typography.Title>

          <div className="content">
            <Row gutter={[40, 40]} justify="space-around">
              <Col xs={24} md={12} xl={7}>
                <div className="desc-section">
                  <img src={icon1} />
                  <div>
                    <Typography.Title level={2}>
                      3% Buy-Side Referral Commission
                    </Typography.Title>
                    <p>
                      Explore our collection of stunning single-family homes in
                      top second home destinations. We'll help you find the
                      perfect fit, and you decide how many shares you'd like to
                      own.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={7}>
                <div className="desc-section">
                  <img src={icon3} />
                  <div>
                    <Typography.Title level={2}>
                      We Handle The Details
                    </Typography.Title>
                    <p>
                      Explore our collection of stunning single-family homes in
                      top second home destinations. We'll help you find the
                      perfect fit, and you decide how many shares you'd like to
                      own.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={7}>
                <div className="desc-section">
                  <img src={icon2} />
                  <div>
                    <Typography.Title level={2}>
                      Get Paid Faster
                    </Typography.Title>
                    <p>
                      Explore our collection of stunning single-family homes in
                      top second home destinations. We'll help you find the
                      perfect fit, and you decide how many shares you'd like to
                      own.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Button type="primary" className="btn-center">
            SEE YOUR OPTIONS
          </Button>
        </div>

        <VideoSection
          extra={"WEBINAR"}
          heading={"Float basics"}
          headingType="simple"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row"}
          background={"#fff"}
          type="image"
          Video={Videosample}
          buttonObj={{
            type: "text",
            title: "REGISTER",
            link: "/learn",
          }}
        />

        <ConnectCrewForm />

        <VideoSection
          extra={"PARTNER BLOG"}
          heading={"Resources, trends & agent stories"}
          headingType="simple"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row-reverse"}
          background={"#fff"}
          type="image"
          Video={Videosample2}
          buttonObj={{
            type: "text",
            title: "GET UP TO SPEED",
            link: "/learn",
          }}
        />
      </div>
    </Layout>
  );
};

export default Listing;
