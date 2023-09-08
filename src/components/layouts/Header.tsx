import React from "react";
import styled from "styled-components";

function StyledHeader() {
  return (
    <Header>
      <HeaderText>イトガタリ</HeaderText>
      <HeaderSubText>意図を語り、糸を結ぶ</HeaderSubText>
    </Header>
  );
}

export default StyledHeader;

const Header = styled.div`
  background-color: #ef454a;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 20px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 479px) {
    font-size: 12px;
  }
`;

const HeaderSubText = styled.p`
  font-size: 14px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 12px;
  }
  @media (max-width: 479px) {
    font-size: 10px;
  }
`;
