import React from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/index";

import MouseIcon from "../assets/mouse.png";

const Layout = ({
  active,
  scroll,
  heading,
  center,
  background,
  showHeader,
  faq,
  children,
}) => {
  return (
    <div className="layout-main">
      {showHeader ? (
        <div
          className="header-section"
          style={{
            background: `url(${background})`,
          }}
        >
          <Navbar active={active} primary={false} />

          <div className={center ? "center" : "head-content"}>
            <h1>{heading}</h1>
          </div>
          {scroll ? (
            <div className="mouse-section">
              <p>SCROLL DOWN</p>
              <img src={MouseIcon} />
            </div>
          ) : (
            <div />
          )}
        </div>
      ) : (
        <Navbar active={active} primary={true} />
      )}
      <div className={showHeader ? "" : "children"}>{children}</div>
      {faq && <Faq />}
      <Footer />
    </div>
  );
};

export default Layout;
