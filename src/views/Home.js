import React from "react";
import { ListProducts } from "../components/Products/ListProducts";
import { AlertProduct } from "../components/Products/AlertProduct";
import { Container } from "react-bootstrap";
import { HeaderApp } from "../components/HeaderApp";
export const Home = () => (
  <Container>
    <div className="App">
      <HeaderApp />
      <ListProducts />
    </div>
  </Container>
);
