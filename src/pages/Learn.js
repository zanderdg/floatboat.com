import React from "react";
import { Button, Typography, Table, Row, Col, Input,Radio } from "antd";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import FeaturedBoat from "../components/FeaturedBoat";
import LuxuryBoat from "../components/LuxuryBoat";
import VideoSection from "../components/VideoSection";
import Layout from "../Layout/Layout";
import colors from "../theme.json";

import homeBg from "../assets/learn-bg.png";
import floatOwn from "../assets/float-own.png";
import Videosample from "../assets/video.png";
import featuredImg from "../assets/featured.png";
import Community from "../components/Community";
import FindFloat from "../components/FindFloat";

const Learn = () => {
  return (
    <div className="learn-main">
      <Layout
        active={"learn"}
        scroll={false}
        background={homeBg}
        center
        showHeader={true}
        faq
        heading={
          <>
            <h2>HOW FLOAT WORKS</h2>
            <h1>Co-Ownership, Simplified</h1>
            <p>
              We manage the Boat, and you own it. It's the modern way to buy and
              own a boat.
            </p>
          </>
        }
      >
        <LuxuryBoat
          heading={"Own"}
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          button={true}
          image={floatOwn}
        />
        <VideoSection
          extra={"WE MAKE IT SIMPLE"}
          heading={"How LLC co-ownership works"}
          headingType="simple"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row"}
          background={"#fff"}
          Video={Videosample}
          buttonObj={{
            type: "primary",
            title: "LEARN MORE",
            link: "/learn",
          }}
        />
        <FeaturedBoat
          multi={false}
          image={featuredImg}
          content={
            <div className="content">
              <Typography.Title level={1}>
                Dream yacht, dream location
              </Typography.Title>
              <p>
                Pacaso offers homes in some of the most sought-after second home
                destinations in the U.S. and Spain. Check out our current
                markets, and if you don't see your favorite, tell us where we
                should expand next.
              </p>
              <Button type="text">
                TOP DESTINATIONS <ArrowRightOutlined />
              </Button>
            </div>
          }
        />

        {/* forget timeshares */}
        <div className="learn-timeshare">
          <div className="timeshare-inner">
            <Table
              columns={[
                {
                  title: "",
                  dataIndex: "name",
                  width: 250,
                },
                {
                  title: "FLOAT BOAT",
                  dataIndex: "type",
                },
                {
                  title: "BOAT TIMESHARE",
                  dataIndex: "timeshare",
                },
              ]}
              dataSource={[
                {
                  name: "TYPE",
                  type: "Single-Multiple",
                  timeshare: "Boat/Yacht",
                },
                {
                  name: "TRUE OWNERSHIP",
                  type: "Yes, real ownserhip",
                  timeshare: "Boat/Yacht",
                },
                {
                  name: "USAGE",
                  type: "Ongoing access",
                  timeshare: "Fixed week(s)",
                },
                {
                  name: "RESALE APPROACH",
                  type: "Marketing pricing; sell on your terms",
                  timeshare: "Set pricing; sell with resorts",
                },
              ]}
              bordered={false}
              pagination={false}
              scroll={{ x: "auto" }}
            />
            <div className="content">
              <Typography.Title level={1}>Forget timeshares</Typography.Title>
              <p>
                With Flaot, you own a boat, not just a block of time. You can
                book stays throughout the year, not annually. And resale? It's
                fast and streamlined, and you set the price.
              </p>
              <Button type="primary">
                LEARN MORE <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>

        <VideoSection
          // extra={"WE MAKE IT SIMPLE"}
          heading={"Easy, equitable scheduling"}
          headingType="simple"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row-reverse"}
          background={"#fff"}
          Video={Videosample}
          buttonObj={{
            type: "primary",
            title: "GET THE DETAILS",
            link: "/learn",
          }}
        />

        {/* find your float */}
      <FindFloat />

        <VideoSection
          extra={"OWNER STORIES"}
          heading={"Float bring families together"}
          headingType="simple"
          content={
            "Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own."
          }
          flexDirection={"row"}
          background={colors["primary-color"]}
          text={"white"}
          Video={Videosample}
          buttonObj={{
            type: "text",
            title: "READ MORE STORIES",
            link: "/learn",
          }}
        />

        <Community />
      </Layout>
    </div>
  );
};

export default Learn;
