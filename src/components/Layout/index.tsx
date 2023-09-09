import React from "react";
import { Container, Header } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <img
          src="https://tinnova.com.br/wp-content/uploads/2021/05/logo_dark.png"
          alt="logo"
        />
      </Header>
      {children}
    </Container>
  );
};
