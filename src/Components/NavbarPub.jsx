import React from "react";
import { Flex, FontFamily } from "../Style/CommonStyled";
import "../Style/PublicHome.css";
const NavbarPub = () => {
  return (
    <>
      <Flex width="100%">
        <Flex content="space-between" width="90%">
          <div className="media">MEDIA MANAGER</div>
        </Flex>
      </Flex>
    </>
  );
};

export default NavbarPub;
