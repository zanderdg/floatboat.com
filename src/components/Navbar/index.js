import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const index = ({active,primary}) => {
  return (
    <>
      <Navbar active={active} primary={primary} />
      <NavbarMobile active={active} primary={primary} />
    </>
  );
};

export default index;
