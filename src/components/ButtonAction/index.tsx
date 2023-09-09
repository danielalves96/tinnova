import React from "react";

import { thisComp } from "./types";
import { Container } from "./style";

import { LoadingInput } from "../LoadingInput";

export const ButtonAction: React.FC<thisComp> = (props) => {
  const { children, disabled, isLoading, onClick } = props;

  return (
    <Container
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
      {isLoading ? <LoadingInput /> : children}
    </Container>
  );
};
