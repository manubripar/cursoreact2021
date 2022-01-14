import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ShoppingCart } from "./Products/ShoppingCart/ShoppingCart";

const style = {
  marginBottom: "10px",
};

export const HeaderApp = () => (
  <Navbar bg="ligth" variant="ligth" style={style}>
    <Container>
      <Link to = {"/"}>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Ecommerce Mern Stack
        </Navbar.Brand>
      </Link>
      <ShoppingCart />
    </Container>
  </Navbar>
);
