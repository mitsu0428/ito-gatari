import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";

interface CardProps {
  children: React.ReactNode;
}

export default function CardComponent({ children }: CardProps) {
  return (
    <StyledCard
      variant="outlined"
      style={{ width: 800 }}
    >
      {children}
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
