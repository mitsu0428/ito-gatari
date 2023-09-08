import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
}

export default function ButtonComponent({
  variant,
  color,
  onClick,
  children,
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
