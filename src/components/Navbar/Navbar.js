import React from "react";
import { Button, Typography, Select, Divider, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import HeartIcon from "../../assets/heart.png";
import NavDrawer from "./NavDrawer";
import { useEffect, useState } from "react";

const Navbar = ({ active, primary }) => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        primary
          ? "navbar navbar-primary"
          : scrollPosition > 300
          ? "navbar navbar-primary"
          : "navbar"
      }
    >
      <Typography.Title level={1}>Float Boat</Typography.Title>
      <div className="nav-options">
        <Button
          type="text"
          onClick={() => {
            navigate("/");
          }}
          className={active === "home" ? "bottomBorder" : ""}
        >
          HOME
        </Button>
        <Button
          onClick={() => {
            navigate("/learn");
          }}
          type="text"
          className={active === "learn" ? "bottomBorder" : ""}
        >
          LEARN
        </Button>
        <Button
          type="text"
          onClick={() => {
            navigate("/listing");
          }}
          className={active === "listing" ? "bottomBorder" : ""}
        >
          LISTING
        </Button>
        <Button
          type="text"
          onClick={() => {
            navigate("/app-access");
          }}
          className={active === "access" ? "bottomBorder" : ""}
        >
          APP ACCESS
        </Button>
        <Button
          type="text"
          onClick={() => {
            navigate("/contact");
          }}
          className={active === "contact" ? "bottomBorder" : ""}
        >
          CONTACT US
        </Button>
        <Button type="text">
          <img src={HeartIcon} />
        </Button>
        <Select defaultValue={"usd"} style={{ width: 130 }}>
          <Select.Option value="usd">$USD</Select.Option>
        </Select>
        <NavDrawer />
      </div>
    </div>
  );
};

export default Navbar;
