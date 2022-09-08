import React from "react";
import { Button, Typography, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Carousel from "react-multi-carousel";


const FeaturedBoat = ({ multi,header,content,image }) => {
  let data = [{}, {}, {}];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="featured">
     {header && <div className="head">
        <Typography.Title level={1}>
          Featured
          <span className="kaushan-general">Boat</span>
        </Typography.Title>
        <p>Browse our curated selection of wow-worthy listings.</p>
      </div>}
      {multi ? (
        <Carousel
          swipeable
          draggable
          arrows={false}
          showDots={true}
          responsive={responsive}
          // infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          // removeArrowOnDeviceType={["desktop"]}
          // deviceType={props.deviceType}
        >
          {data.map((item) => (
            <div>
              <Row align="middle" justify="space-between">
                <Col xs={24} md={10}>
                  {content}
                </Col>

                <Col xs={24} md={12}>
                  <img src={image} width="100%" height="600px" />
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>
          <Row align="middle" justify="space-between">
            <Col xs={24} md={10}>
             {content}
            </Col>

            <Col xs={24} md={12}>
              <img src={image} width="100%" />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default FeaturedBoat;
