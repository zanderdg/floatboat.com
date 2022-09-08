import {
  Typography,
  Row,
  Col,
  Button,
  Input,
  Select,
  Tag,
  Slider,
  Pagination,
  Card,
} from "antd";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import FindFloat from "../components/FindFloat";
import BoatCard from "../components/Cards/BoatCard";
import BoatCardHorizontal from "../components/Cards/BoatCardHorizontal";
import Layout from "../Layout/Layout";
import oustrory1 from "../assets/oustrory1.jpg";
import ourstory2 from "../assets/ourstory2.jpg";
import ourstory3 from "../assets/ourstory3.jpg";
import ourstory4 from "../assets/ourstory4.jpg";
import ourstory5 from "../assets/ourstory5.jpg";
import circleImg from "../assets/circle-icon.png";
import { useNavigate } from "react-router-dom";
import { ImEqualizer, HiDotsVertical, HiDotsHorizontal } from "react-icons/all";
import { useState } from "react";
import sampleVideo from "../assets/output.mp4";
import DontMiss from "../components/DontMiss";

const Ourstory = () => {
  const { Meta } = Card;
  let navigate = useNavigate();
  const [vertical, setVertical] = useState(true);
  let data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="ourstory-main">
      <Layout active={"ourstory"} faq={false} scroll={false} showHeader={false}>
        <div className="ourstory-header">
          <Typography.Title level={3}>OUR MISSION</Typography.Title>
          <Typography.Title level={1}>Why We're Here</Typography.Title>
          <p>
            Are you an innovative agent looking for more sales opprtunities? We
            make it
            <br />
            easy for you to earn generous commissions and delight client
          </p>
        </div>

        <div className="imagecontent">
          <Row justify="space-between">
            <Col xs={24} md={10}>
              <div className="content">
                <Typography.Title level={1}>Our Crew</Typography.Title>
                <p>
                  Nearly 10 million homes sit unoccupied for 11 months a year in
                  the U.S. Meanwhile, millions of people dream of owning and
                  enjoying a second home. To solve this, we created Pacaso, a
                  service to expand second home ownership. We empower poople to
                  own a share of a second home ,from 1/8 to 1/2, and experience
                  true real state ownership
                </p>
                <Button type="text">
                  VIEW ROLES <ArrowRightOutlined />
                </Button>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <img src={oustrory1} width="100%" height="100%" />
            </Col>
          </Row>
        </div>

        <div className="float-header">
          <Typography.Title level={1}>The Story Behind Float</Typography.Title>
          <p>
            Are you an innovative agent looking for more sales opprtunities? We
            make it
            <br />
            easy for you to earn generous commissions and delight client
          </p>

          <video className="vidplayer" src={sampleVideo} controls height={"100%"} />
        </div>

        <div className="imagecontent">
          <Row align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <img src={ourstory2} width="100%" height="50%" />
            </Col>

            <Col xs={24} md={10}>
              <div className="company">
                <Typography.Title level={1}>Company news</Typography.Title>
                <p>
                  Explore our collection of stunning single-family homes in top
                  second home destinations. We'll help you find the perfect fit,
                  and you decide how many shares you'd like to own.
                </p>
                <Button type="text">
                  GET IT NOW <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="bts">
          <Typography.Title level={1}>Behind the scenes</Typography.Title>
          <p>Meet the executive leadership</p>
        </div>

        <div className="imagecontent">
          <Row gutter={[30,30]} justify="center">
          {/* <Row justify="space-between"> */}
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                bordered={false}
                // style={{
                //   width: 240,
                // }}
                cover={<img src={ourstory4} height="500px" />}
              >
                <Meta title="BRYCE TILLERY" description="CEO & C0-FOUNDER" />
                <div className="additional">
                <Button style={{color:"black", borderBottom:"1px solid"}} type="text">Read Bio </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                bordered={false}
                // style={{
                //   width: 240,
                // }}
                cover={<img src={ourstory3} height="500px" />}
              >
                <Meta
                  title="RUBEN GARCIAS JR"
                  description="CEO & C0-CHAIRMAN"
                />
                 <div className="additional">
                <Button style={{color:"black", borderBottom:"1px solid"}} type="text">Read Bio </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                bordered={false}
                // style={{
                //   width: 240,
                // }}
                cover={<img src={ourstory5} height="500px" />}
              >
                <Meta
                  title="MARINE BLANCO"
                  description="CHEIF FINANCIAL OFFICER"
                  button=""
                />
                <div className="additional">
                <Button style={{color:"black", borderBottom:"1px solid"}} type="text">Read Bio </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

       <DontMiss/>
      </Layout>
    </div>
  );
};

export default Ourstory;
