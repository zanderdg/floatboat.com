import React from "react";
import { Typography, Divider, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import buyInner from "../assets/buy-inner.png";
import buyRound from "../assets/buy-round.png";
import circleIcon from "../assets/circle-icon.png";
const LuxuryBoat = ({ heading, content, button, image }) => {
  return (
    <div className="buy-section">
      <div className="heading">
        <Typography.Title level={1}>
          Find your Luxury Boat with{" "}
          <span className="kaushan-general">Float</span>
        </Typography.Title>
        <Divider type="vertical" />
        <p>We make it simple</p>
      </div>
      <div className="buy-content">
        <div className="buy-content-inner">
          <div className="content">
            <Typography.Title level={1}>
              <div className="buy-icon">
                <img src={circleIcon} />
                {/* <img src={buyInner} className="inner" /> */}
              </div>
              {heading}
            </Typography.Title>
            <p>
              {content}
              <br />
              {button && (
                <Button type="primary" style={{ margin: "30px 0" }}>
                  VIEW LISTINGS <ArrowRightOutlined />
                </Button>
              )}
            </p>
          </div>
          <div>
            <img src={image} width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBoat;
