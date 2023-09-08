import React from "react";
import styled from "styled-components";

function StyledFooter() {
  return (
    <Footer>
      <FooterText>© 2023 イトガタリ</FooterText>
    </Footer>
  );
}

export default StyledFooter;

const Footer = styled.div`
  background-color: #ef454a;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 20px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 479px) {
    font-size: 12px;
  }
`;
