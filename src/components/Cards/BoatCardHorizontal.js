import { Button, Typography } from "antd";
import React from "react";
import boatImg1 from "../../assets/boat1.jpg";
import { HeartOutlined, LikeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BoatCard = ({ data }) => {
  let navigate = useNavigate();

  return (
    <div
      className="boat-card boat-card-horizontal"
      onClick={() => {
        navigate(`/property/${data?._id}`);
      }}
    >
      <img src={data?.images?.[0]} height={"300px"} />
      <div className="content">
        <div>
          <p></p>
          <Typography.Title level={4}>{data?.name}</Typography.Title>
          <Typography.Title level={3}>
            ${(data?.price / 8)?.toLocaleString()}
            <sub>/share</sub>
          </Typography.Title>
          <p>Available Now</p>
          <p>{data?.location}</p>
        </div>
        <div className="bottom">
          <Button icon={<HeartOutlined />} type="primary" />
          <Button icon={<LikeOutlined />} type="primary" />
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
