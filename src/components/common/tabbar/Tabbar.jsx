import React from "react";
import styled from "styled-components";

function Tabbar() {
  return (
    <TabbarWapper>
      <MenuList>
        <MenuButton>
          <MenuButtonIcon />
          <MenuButtonLabel>트렌딩</MenuButtonLabel>
        </MenuButton>
      </MenuList>
    </TabbarWapper>
  );
}

export default Tabbar;

const TabbarWapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuList = styled.div`
  display: flex;
`;
const MenuButton = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MenuButtonIcon = styled.div`
  width: 18px;
  height: 18px;
`;

const MenuButtonLabel = styled.div`
  font-size: 18px;
`;
