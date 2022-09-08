import { Typography, Row, Col, Button, Input, Radio } from "antd";
import Layout from "../Layout/Layout";
import Banner from "../assets/mobile.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import advantage from "../assets/advantage.png";
import understanding from "../assets/understanding.png";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Listing = () => {
  return (
    <Layout active={"access"} faq={true} scroll={false} showHeader={false}>
      <div className="access-main">
        <div className="header">
          <div className="header-inner">
            <div className="content">
              <Typography.Title level={2}>
                FLOAT ACCESS <sup>TM</sup>
              </Typography.Title>

              <Typography.Title level={1}>
                Step to the front of the line
              </Typography.Title>
              <p>
                For a one-time program fee of $1,000, you’ll gain exclusive
                access to select listings and receive a generous credit at
                closing.
              </p>
            </div>
            <img src={Banner} width="auto" height={"100%"} />
          </div>
        </div>

        <div className="flexible-ownership">
          <div className="content">
            <Row gutter={[40, 40]} justify="space-around">
              <Col xs={24} md={12} lg={7}>
                <div className="desc-section">
                  <img src={icon1} />
                  <div>
                    <Typography.Title level={2}>Preview</Typography.Title>
                    <p>
                      Explore our collection of stunning single-family homes in
                      top second home destinations. We'll help you find the
                      perfect fit, and you decide how many shares you'd like to
                      own.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={7}>
                <div className="desc-section">
                  <img src={icon2} />
                  <div>
                    <Typography.Title level={2}>Access</Typography.Title>
                    <p>
                      Explore our collection of stunning single-family homes in
                      top second home destinations. We'll help you find the
                      perfect fit, and you decide how many shares you'd like to
                      own.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={7}>
                <div className="desc-section">
                  <img src={icon3} />
                  <div>
                    <Typography.Title level={2}>Save</Typography.Title>
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
            ENROLL NOW
          </Button>
        </div>

        <div className="advantage">
          <Row gutter={[30, 30]} align="middle" justify="space-evenly">
            <Col xs={24} md={24} lg={8}>
              <Typography.Title level={1}>
                Gain a buying advantage
              </Typography.Title>
              <p>
                Float offers homes in some of the most sought-after second home
                destinations in the U.S. and Spain. Check out our current
                markets, and if you don't see your favorite, tell us where we
                should expand next.
                <br />
                <br />
                Float Access gives you a VIP shopping advantage. Step over the
                velvet rope, and be the first to know about new listings and
                previously sold-out homes with newly available shares.
              </p>
            </Col>

            <Col xs={24} md={24} lg={12}>
              <img src={advantage} height="auto" width={"100%"} />
            </Col>
          </Row>
        </div>

        <div className="float-works">
          <Row gutter={[40, 40]} justify="space-between">
            <Col xs={24} lg={12} xl={11}>
              <img src={understanding} width="100%" height={"100%"} />
            </Col>

            <Col xs={24} lg={12} xl={12} className="content">
              <div>
                <Typography.Title level={1}>
                  How Flaot Access works
                </Typography.Title>

                <Typography.Title level={5}>
                  <strong>Program cost:</strong> One-time enrollment fee of
                  $1,000
                </Typography.Title>
                <br />
                <Typography.Title level={5}>
                  <strong>
                    Use our app to discover and save exclusive listings.
                  </strong>
                  Once enrolled, download or update the Float app to view
                  listings only available to Float Access buyers.
                </Typography.Title>
                <br />
                <Typography.Title level={5}>
                  <strong>Shop VIP listings.</strong>Early access listings will
                  be viewable in the app as they become available.
                </Typography.Title>
                <br />
                <Typography.Title level={5}>
                  <strong>Pre-shop sold homes.</strong>Don’t miss your chance to
                  own a sold-out Float. Browse and save sold homes, and we’ll
                  send an alert when a share is up for resale so you can take
                  action.
                </Typography.Title>
                <br />
                <Typography.Title level={5}>
                  <strong>Purchase and save.</strong> When you buy a Float,
                  you’ll receive $2,500 in closing credits per ⅛ share purchased
                  — 2.5x the Float Access program cost. Buyers of ¼ share will
                  receive $5,000 in closing credits, and buyers of ½ share will
                  receive $10,000 in closing credits.
                </Typography.Title>
              </div>

              <Button type="text">
                SIGN ME UP <ArrowRightOutlined />
              </Button>
            </Col>
          </Row>
        </div>

        <div className="timeline">
          <div className="content">
            <Typography.Title level={1}>Shop on your timeline</Typography.Title>
            <p>
              Float offers homes in some of the most sought-after second home
              destinations in the U.S. and Spain. Check out our current markets,
              and if you don't see your favorite, tell us where we should expand
              next.
              <br />
              <br />
              Want to speak with someone about Float Access? Call us at
              415-289-5626.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
