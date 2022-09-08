import React, { useEffect, useState } from "react";
import { Carousel, Row, Col, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BoatCard from "./Cards/BoatCard";
import { publicAPI } from "../config/constants";

const MoreBoats = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [Data, setData] = useState(null);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      //   console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const getData = async () => {
    const res = await publicAPI.get(`/boats/getAll?page=1&perPage=10`);
    if (res?.data) {
      setData(res?.data?.docs);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const contentStyle = {
    // height: "900px",
    color: "#fff",
    // background: "#eeeeee",
    padding: "50px",
    // width : "90%",
    margin: "50px auto",
    // position: "relative",
  };

  const arrowStyle = {
    color: "white",
    fontsize: "20px",
  };
  const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }) =>
    direction === "left" ? (
      <LeftOutlined {...carouselProps} />
    ) : (
      <RightOutlined {...carouselProps} />
    );

  return (
    <div className="more-boats">
      <Typography.Title level={2}>More boats to consider</Typography.Title>
      <Carousel
        afterChange={onChange}
        style={contentStyle}
        arrows={true}
        slidesToShow={width <= 760 ? 1 : width <= 950 ? 2 : 3}
        infinite={false}
        draggable
        // responsive={{
        //     xs : 24
        // }}
        nextArrow={<Arrow direction="right" />}
        prevArrow={<Arrow direction="left" />}
      >
        {Data?.map((d) => (
          <div>
            <BoatCard data={d} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MoreBoats;
