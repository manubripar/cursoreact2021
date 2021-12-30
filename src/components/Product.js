import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import "../assets/css/styles.css";

export const Product = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div>{title}</div>
        </Col>
        <Col xs={4}>
          <Button variant="primary">
            Precio <Badge bg="secondary">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product " alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};
