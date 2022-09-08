import { Typography } from "antd";
import React from "react";
import boatImg1 from "../../assets/boat1.jpg";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BoatCard = ({ data }) => {
  let navigate = useNavigate();

  return (
    <div
      className="boat-card"
      onClick={() => {
        navigate("/property");
      }}
    >
      <img src={data?.images[0]} width="100%" height={"300px"} />
      <div className="content">
        <Typography.Title level={4}>{data?.name}</Typography.Title>
        <div className="bottom">
          <div>
            <Typography.Title level={3}>
              ${(data?.price / 8)?.toLocaleString()}
              <sub>/share</sub>
            </Typography.Title>
            <HeartOutlined />
          </div>
          <div>
            <p style={{ width: "95%" }}>{data?.location}</p>
            <p>Available Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
