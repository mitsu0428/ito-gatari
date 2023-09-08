import React from "react";
import styled from "styled-components";

interface FlexWrapProps {
  children: React.ReactNode;
}

export default function FlexWrap({ children }: FlexWrapProps) {
  return <StyledFlexWrap>{children}</StyledFlexWrap>;
}

const StyledFlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
