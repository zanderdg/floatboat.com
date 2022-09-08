import React, { useState } from "react";
import { Drawer, Button, Select } from "antd";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import HeartIcon from "../../assets/heart.png";
import Login from "../modal/Login";
import stone from "../../assets/stone-dark.png";

const NavDrawer = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <MenuOutlined
        onClick={showDrawer}
        style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
      />

      {/* <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} style={{fontSize : "60px"}} /> */}
      <Drawer placement="right" onClose={onClose} visible={visible}>
        {/* <img src={stone} /> */}
        <div className="navdrawer">
          {/* <h2
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            SIGN UP / SIGN IN
          </h2> */}
          <Login />

          <h2
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            DISCOVER
          </h2>

          <h4
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h4>
          <h4
            type="text"
            onClick={() => {
              navigate("/learn");
            }}
          >
            Learn
          </h4>
          <h4
            type="text"
            onClick={() => {
              navigate("/listing");
            }}
          >
            Listings
          </h4>

          <h2
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            MORE
          </h2>

          <h4
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            Blog
          </h4>
          <h4
            type="text"
            onClick={() => {
              navigate("/ourstory");
            }}
          >
            Our Story
          </h4>
          <h4
            type="text"
            onClick={() => {
              navigate("/app-access");
            }}
          >
            Accesss
          </h4>
          <h4
            type="text"
            onClick={() => {
              navigate("/partner");
            }}
          >
            Partner
          </h4>

          <h2
            type="text"
            className="bottomBorder"
            onClick={() => {
              navigate("/");
            }}
          >
            SUPPORT
          </h2>

          <h4
            type="text"
            onClick={() => {
              navigate("/contact");
            }}
          >
            FAQs
          </h4>

          <h4
            type="text"
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT US
          </h4>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
