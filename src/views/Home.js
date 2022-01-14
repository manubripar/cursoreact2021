import React from "react";
import { ListProducts } from "../components/Products/ListProducts";
import { Container } from "react-bootstrap";
export const Home = () => (
  <Container>
    <div className="App">
      <ListProducts />
    </div>
  </Container>
);
