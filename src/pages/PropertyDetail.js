import React, { useState, useEffect } from "react";
import DontMiss from "../components/DontMiss";
import ConnectCrew from "../components/ConnectCrew";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

import DetailImg from "../assets/detail.png";
import { Button, Col, Divider, Row, Select, Typography, Tooltip } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  RightOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Map from "../components/Map";
import FlexibleOwnership from "../components/FlexibleOwnership";
import MoreBoats from "../components/MoreBoats";
import understanding from "../assets/understanding.png";
import fireplace from "../assets/fireplace.svg";
import balcony from "../assets/balcony.svg";
import bunk_room from "../assets/bunk-room.svg";
import hot_tub from "../assets/hot-tub.svg";
import jet_ski from "../assets/jet-ski.svg";
import sea_view from "../assets/sea-view.svg";
import walk_in from "../assets/walk-in.svg";
import { publicAPI } from "../config/constants";
import { calculateInstallment } from "../functions/general";
import FinancingModal from "../components/modal/FinancingModal";
import BoatExpenseModal from "../components/modal/BoatExpenseModal";

const PropertyDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [bgCount, setbgCount] = useState(1);
  const [expenseData, setExpenseData] = useState(null);
  const [ownerShip, setOwnerShip] = useState("1/8");
  const [downPayment, setDownPayment] = useState("30");

  const getData = async () => {
    const res = await publicAPI.get(`/boats/get/${id}`);
    if (res?.data) {
      setData(res?.data);
      calculateInst(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) calculateInst(data);
  }, [ownerShip, downPayment]);

  const calculateInst = (data1) => {
    let ins = calculateInstallment(
      data1.price,
      data1.expenseTotal,
      ownerShip,
      Number(downPayment)
    );
    setExpenseData(ins);
  };

  return (
    <div className="property-main">
      <Layout active={"listing"} faq={false} scroll={false} showHeader={false}>
        <div
          className="header"
          style={{
            background: `url(${data?.images[bgCount - 1]})`,
          }}
        >
          <div>
            <Button type="primary">AVAILABLE NOW</Button>
            <Typography.Title level={4}>
              <LeftOutlined
                style={{ color: bgCount === 1 && "gray" }}
                onClick={() => {
                  if (bgCount !== 1) {
                    setbgCount(bgCount - 1);
                  }
                }}
              />
              {`${bgCount}/${data?.images?.length}`}
              <RightOutlined
                style={{ color: bgCount === data?.images?.length && "gray" }}
                onClick={() => {
                  if (data?.images?.length !== bgCount) {
                    setbgCount(bgCount + 1);
                  }
                }}
              />
            </Typography.Title>
          </div>
        </div>
        <div className="description">
          <div className="left">
            <Typography.Title level={3}>{data?.name}</Typography.Title>
            <Typography.Title level={1}>
              ${(data?.price / 8)?.toLocaleString()} | 1/8 Ownership
            </Typography.Title>
            <Divider />
            <Row gutter={[30, 30]}>
              <Col xs={24} md={12} lg={8}>
                <Typography.Title level={4}>WHOLE BOAT PRICE</Typography.Title>
                <Typography.Title level={5}>
                  ${data?.price?.toLocaleString()}
                </Typography.Title>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Typography.Title level={4}>ATTRIBUTES</Typography.Title>
                <Typography.Title level={5}>
                  {data?.attributes}
                </Typography.Title>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Typography.Title level={4}>YEAR BUILT</Typography.Title>
                <Typography.Title level={5}>{data?.builtYear}</Typography.Title>
              </Col>
              <Divider />
              <Col xs={24}>
                <Typography.Title level={4}>LOCATION</Typography.Title>
                <Typography.Title level={5}>{data?.location}</Typography.Title>
              </Col>
              <Divider />
              <Col xs={24}>
                <Typography.Title level={4}>ABOUT THIS HOME</Typography.Title>
                <p className="content">{data?.description}</p>
              </Col>
            </Row>
          </div>
          <div className="right">
            <div className="section">
              <div className="head">
                <Typography.Title level={5}>
                  ESTIMATE THE MONTHLY COST TO OWN
                </Typography.Title>
              </div>
              <div className="content">
                <Row gutter={[20, 20]} justify="space-between">
                  <Col xs={24} md={8}>
                    <p>OWNERSHIP</p>
                    <Select
                      defaultValue={"1/8"}
                      value={ownerShip}
                      style={{ width: "100%" }}
                      onChange={(e) => setOwnerShip(e)}
                    >
                      <Select.Option value="1/8">1/8</Select.Option>
                      <Select.Option value="1/4">1/4</Select.Option>
                      <Select.Option value="3/8">3/8</Select.Option>
                      <Select.Option value="1/2">1/2</Select.Option>
                    </Select>
                    <p>
                      ${expenseData?.perShareCost?.toLocaleString()}{" "}
                      <Tooltip title="help" placement="bottom">
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </p>
                  </Col>
                  <Col xs={24} md={8}>
                    <p>DOWN PAYMENT</p>
                    <Select
                      defaultValue={"20"}
                      value={downPayment}
                      style={{ width: "100%" }}
                      onChange={(e) => setDownPayment(e)}
                    >
                      <Select.Option value="20">20%</Select.Option>
                      <Select.Option value="30">30%</Select.Option>
                      <Select.Option value="40">40%</Select.Option>
                      <Select.Option value="50">50%</Select.Option>
                      <Select.Option value="80">80%</Select.Option>
                      <Select.Option value="100">100%</Select.Option>
                    </Select>

                    <p>${expenseData?.downAmount?.toLocaleString()}</p>
                  </Col>
                </Row>
                <Divider style={{ borderTop: "1px solid #fff" }} />
                <Row justify="space-between">
                  <Col xs={24} md={8}>
                    <p>
                      Financing{" "}
                      <FinancingModal
                        ownerShip={ownerShip}
                        downPayment={downPayment}
                      />
                    </p>
                  </Col>
                  <Col xs={24} md={8}>
                    <p>
                      ${Number(expenseData?.financing)?.toLocaleString()}/mo.
                    </p>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col xs={24} md={8}>
                    <p>
                      Boat expenses{" "}
                      <BoatExpenseModal
                        data={expenseData}
                        expense={data?.expenses}
                      />
                    </p>
                  </Col>
                  <Col xs={24} md={8}>
                    <p>${expenseData?.expenseTotal?.toLocaleString()}/mo.</p>
                  </Col>
                </Row>
                <Divider style={{ borderTop: "1px solid #fff" }} />
                <div className="bottom-bar">
                  <Typography.Title level={1}>
                    ${Number(expenseData?.monthlyInstallment)?.toLocaleString()}
                    /Month
                  </Typography.Title>
                  <p>
                    {ownerShip} ownership • Up to{" "}
                    {ownerShip === "1/8"
                      ? "44"
                      : ownerShip === "1/4"
                      ? "88"
                      : ownerShip === "3/8"
                      ? "132"
                      : "176"}{" "}
                    nights a year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />

        <div className="amenities">
          <Typography.Title level={3}>DISTINCTIVE AMENITIES</Typography.Title>
          <Row justify="space-between">
            {data?.amenities?.map((amen) => (
              <Col xs={24} md={12} lg={12}>
                <div className="desc">
                  {/* <img src={fireplace} width="30px" height={"30px"} /> */}
                  <p>{amen?.Name}</p>
                </div>
              </Col>
            ))}
            {/* <Col xs={24} md={12} lg={8}>
              <div className="desc">
                <img src={balcony} width="30px" height={"30px"} />
                <p>Balcony</p>
              </div>
              <div className="desc">
                <img src={bunk_room} width="30px" height={"30px"} />
                <p>Bunk Room</p>
              </div>
              <div className="desc">
                <img src={walk_in} width="30px" height={"30px"} />
                <p>Walk-in Closet</p>
              </div>
            </Col> */}
          </Row>
        </div>

        <div className="map">
          <Typography.Title level={3}>Map</Typography.Title>
          {data && <Map lat={data?.latitude} lng={data?.longitude} />}
        </div>
        <FlexibleOwnership />
        <ConnectCrew />
        <MoreBoats />

        <div className="understanding">
          <Row align="middle">
            <Col xs={24} lg={10}>
              <div className="content">
                <Typography.Title level={2}>
                  Understanding ownership costs
                </Typography.Title>
                <p>
                  Know the bottom line before you buy. No hidden fees, no
                  surprises, no monthly markups.
                </p>
                <Button type="primary">
                  LEARN MORE <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <img src={understanding} width="100%" />
            </Col>
          </Row>
        </div>

        <div className="agent-main">
          <div className="content">
            <Typography.Title level={3}>AGENT AMBASSADOR</Typography.Title>
            <Typography.Title level={2}>
              COURTESY OF - BEN BEESLEY, KW COASTAL ESTATES
            </Typography.Title>
            <Typography.Title level={3} style={{ fontWeight: "400" }}>
              Whole boat list price: $5,200,000
            </Typography.Title>
            <p>
              All listings are represented by licensed independent brokerages.
            </p>
          </div>
        </div>

        <DontMiss />
      </Layout>
    </div>
  );
};

export default PropertyDetail;
