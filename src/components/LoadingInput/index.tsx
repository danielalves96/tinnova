import React from "react";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";
import { thisComp } from "./types";

export const LoadingInput: React.FC<thisComp> = ({ color }) => {
  const { palette } = React.useContext(ThemeContext);

  return (
    <Container
      color={palette[color ? color : "primary"].inverse}
      size={15}
      loading={true}
    />
  );
};
