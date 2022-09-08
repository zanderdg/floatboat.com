import { Divider, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import appleImg from "../assets/apple.png";
import googleImg from "../assets/google.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import pinterest from "../assets/pinterest.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="upper-section">
        <div className="left">
          <p>SIGN UP, GET MORE</p>
          <p>Unlock exclusive features & receive updates</p>
          <Input.Search
            placeholder="Email*"
            enterButton="UNLOCK"
            size="large"
            style={{ width: "100%" }}
            // onSearch={onSearch}
          />
        </div>
        <div className="right">
          <div>
            {/* <h3>Offerings</h3> */}
            <p
              onClick={() => {
                navigate("/learn");
              }}
            >
              Learn
            </p>
            <p
              onClick={() => {
                navigate("/listing");
              }}
            >
              Listings
            </p>
            <p>Selling</p>
            <p>Closing</p>
            <p
              onClick={() => {
                navigate("/partner");
              }}
            >
              Partner
            </p>
          </div>
          <div>
            <h3>About</h3>
            <p
              onClick={() => {
                navigate("/ourstory");
              }}
            >
              Our Story
            </p>
            <p>Agents</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Communities</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Resources</p>
            <p>FAQs</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="social-sections">
        <div className="apps">
          <img src={appleImg} width={"120px"} />
          <img src={googleImg} width={"120px"} />
        </div>
        <div className="icons">
          <img src={insta} width={"30px"} />
          <img src={linkedin} width={"30px"} />
          <img src={twitter} width={"30px"} />
          <img src={youtube} width={"30px"} />
          <img src={pinterest} width={"30px"} />
        </div>
      </div>
      <Divider />
      <div className="bottom">
        <p>
          California DRE #02139624 <span style={{ margin: "0 40px" }}>|</span>{" "}
          2021 Fillmore St. Suite 183, San Francisco, CA 94115 USA
        </p>
        <p className="para-small">
          Our website uses cookies to help us improve your browsing and shopping
          experience. By continuing, you agree to our use of cookies. Accept
        </p>
        <p className="para-small">©2022 Float . All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
