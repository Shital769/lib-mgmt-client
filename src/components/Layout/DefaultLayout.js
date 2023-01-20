import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="main">{children}</Container>
      <Footer />
    </div>
  );
};
