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

import HeartIcon from "../assets/heart.png";
import MouseIcon from "../assets/mouse.png";

import chatImg from "../assets/chat.png";
import sampleVideo from "../assets/output.mp4";

const VideoSection = ({
  extra,
  heading,
  content,
  buttonObj,
  Video,
  flexDirection,
  background,
  headingType,
  text,
  type,
}) => {
  console.log("buttonObj", buttonObj);
  return (
    <div
      className="video-section"
      style={{
        background,
      }}
    >
      <div className="video-section-inner">
        <Row
          align="middle"
          gutter={[30, 30]}
          className="row-section"
          style={{
            flexDirection,
          }}
        >
          <Col xs={24} xl={12}>
            {type === "image" ? (
              <img src={Video} width="100%" />
            ) : (
              <video src={Video} width="100%" controls height={"100%"} />
            )}
          </Col>
          <Col xs={24} xl={12}>
            <div className="video-section_description">
              <h2 className={text === "white" ? "white" : "black"}>{extra}</h2>
              {headingType === "simple" ? (
                <h1 className={text === "white" ? "white" : "black"}>
                  {heading}
                </h1>
              ) : (
                <h1 className={text === "white" ? "white" : "black"}>
                  {heading}
                </h1>
                // <h1>
                //   Own the <span className="kaushan-general"> Joy</span>
                // </h1>
              )}
              {/* Own the <span className="kaushan-general"> Joy</span> */}
              <p className={text === "white" ? "white" : "black"}>
                {content}
                {/* Explore our collection of stunning single-family homes in top
                second home destinations. We'll help you find the perfect fit,
                and you decide how many shares you'd like to own. */}
              </p>
              <Button
                type={buttonObj.type}
                className={
                  buttonObj.type === "primary"
                    ? "white"
                    : text === "white"
                    ? "white"
                    : "black"
                }
              >
                {/* {`${buttonObj.title}`} */}
                {buttonObj.title} <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VideoSection;
