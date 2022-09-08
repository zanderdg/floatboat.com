import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ScrollToTop from "react-router-scroll-top";
// import ScrollToTop from "./Scrolltop";

// import PrivateRoutes from "./PrivateRoutes";

import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Listing from "../pages/Listing";
import PropertyDetail from "../pages/PropertyDetail";
import Contact from "../pages/Contact";
import AppAccess from "../pages/AppAccess";
import Partner from "../pages/Partner";
import Ourstory from "../pages/Ourstory";

const Routers = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/learn" exact element={<Learn />} />
        <Route path="/listing" exact element={<Listing />} />
        <Route path="/property/:id" exact element={<PropertyDetail />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/app-access" exact element={<AppAccess />} />
        <Route path="/partner" exact element={<Partner />} />
        <Route path="/ourstory" exact element={<Ourstory />} />
      </Routes>
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default Routers;
