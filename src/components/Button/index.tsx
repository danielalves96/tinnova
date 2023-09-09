import React from "react";

import { thisComp } from "./types";
import { Container } from "./style";

import { LoadingInput } from "../LoadingInput";

export const Button: React.FC<thisComp> = (props) => {
  const { label, disabled, isLoading, onClick } = props;

  return (
    <Container
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
      {isLoading ? <LoadingInput /> : label}
    </Container>
  );
};
