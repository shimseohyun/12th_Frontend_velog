import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo to={"/"} />
      <HeaderIconList />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  width: 71px;
  height: 20px;
`;

const HeaderIconList = styled.div`
  width: 160px;
  height: 40px;
`;
