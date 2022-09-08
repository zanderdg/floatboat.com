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
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
// import {useRoutes} from "react-router-dom";

import HeartIcon from "../assets/heart.png";
import MouseIcon from "../assets/mouse.png";
import homeBg from "../assets/home-bg.png";
import buySection from "../assets/buy-section.png";
import featuredImg from "../assets/featured.png";

import chatImg from "../assets/chat.png";
import sampleVideo from "../assets/output.mp4";
import Navbar from "../components/Navbar/index";
import LuxuryBoat from "../components/LuxuryBoat";
import FeaturedBoat from "../components/FeaturedBoat";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import Faq from "../components/Faq";
import Layout from "../Layout/Layout";
import DontMiss from "../components/DontMiss";

const Home = (props) => {
  

  return (
    <div className="home-main">
      <Layout
        active={"home"}
        scroll
        showHeader={true}
        faq
        background={homeBg}
        heading={
          <h1>
            The modern way to buy and own a <span>Luxury Boat.</span>
          </h1>
        }
      >
        {/* <div className="header-section">
        <Navbar />

        <div className="head-content">
          <h1>
            The modern way to buy and own a <span>Luxury Boat.</span>
          </h1>
        </div>
        <div className="mouse-section">
          <p>SCROLL DOWN</p>
          <img src={MouseIcon} />
        </div>
      </div> */}

        <LuxuryBoat
          heading={"Buy"}
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          button={false}
          image={buySection}
        />

        <Row>
          <Col xs={0} md={2} />

          <Col xs={24} md={12} lg={6}>
            <div className="float-access">
              <Typography.Title level={1}>
                Introducing
                <span className="kaushan-general">Float</span>
                Access
              </Typography.Title>
              <div>
                <p>
                  Explore our collection of stunning single-family homes in top
                  second home destinations. We'll help you find the perfect fit,
                  and you decide how many shares you'd like to own.
                </p>
                <br />
                <p>
                  Explore our collection of stunning single-family homes in top
                  second home destinations. We'll help you find the perfect fit,
                  and you decide how many shares you'd like to own.
                </p>
              </div>
              <Button type="primary">
                LEARN MORE <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
        </Row>

        <FeaturedBoat
          header
          image={featuredImg}
          multi={true}
          content={
            <div className="content">
              <p>PARK CITY, UT</p>
              <Typography.Title level={1}>Carpe Diem</Typography.Title>
              <p>$1,940,000 - 1/4 OWNERSHIP</p>
              <Typography.Title level={4}>LOREM IPSUM</Typography.Title>
              <p>
                Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own.
              </p>
              <Button type="text">
                DETAILS <ArrowRightOutlined />
              </Button>
            </div>
          }
        />

        <VideoSection
          //  extra={"WE MAKE IT SIMPLE"}
          heading={
            <h1>
              Own the <span className="kaushan-general"> Joy</span>
            </h1>
          }
          //  headingType = "simple"
          // text="black"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row"}
          background={"#eeeeee"}
          Video={sampleVideo}
          buttonObj={{
            type: "text",
            title: "GET STARTED",
            link: "/",
          }}
        />

        <DontMiss />
      </Layout>
    </div>
  );
};

export default Home;
