import { useEffect } from "react";
import "antd/dist/antd.less";

import Routes from "./Routes";
import theme from "../theme.json";
import "../styles/style.css";
import ScrollToTop from "./Scrolltop";
import { useLocation } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      document.body.style.setProperty(`--${key}`, theme[key]);
    });
  }, []);

  // const {pathname} = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes />
    </>
  );
};

export default App;
