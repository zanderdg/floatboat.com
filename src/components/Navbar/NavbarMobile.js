import React from "react";
import { Button, Typography, Select, Divider, Row, Col } from "antd";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import HeartIcon from "../../assets/heart.png";
import NavDrawer from "./NavDrawer";

const Navbar = ({active,primary}) => {
  return (
    <div className={primary ? "navbar-mobile navbar-primary" : "navbar-mobile"}>

      <Typography.Title level={1}>Float Boat</Typography.Title>
      <div className="nav-options">
          <NavDrawer />
      </div>
    </div>
  );
};

export default Navbar;
