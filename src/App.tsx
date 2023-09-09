import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/light";
import GlobalStyle from "./styles/globals";

import { ListProvider } from "contexts/List";
import { AuthProvider } from "contexts/Auth";
import { MyRoutes } from "routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ListProvider>
          <GlobalStyle />
          <MyRoutes />
        </ListProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;