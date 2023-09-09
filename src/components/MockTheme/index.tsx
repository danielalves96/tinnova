import React from "react";

import theme from "../../styles/theme/light";
import { ThemeProvider } from "styled-components";

function MockTheme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MockTheme;
