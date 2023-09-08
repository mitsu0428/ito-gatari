import React from "react";
import styled from "styled-components";
import Input from "@mui/material/Input";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputComponent({
  type,
  placeholder,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

const StyledInput = styled(Input)`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  padding: 8px;
`;
