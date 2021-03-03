import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderBar from "./headerbar";

class ProductWindow extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <div
          style={{
            top: 56,
            position: "absolute",
          }}
          className="w-100"
        >
          <Container
            style={{
              backgroundColor: "rgba(246,246,246, 1)",
            }}
            fluid
          >
            <Row>
              <Col xs={5}>1 of 3</Col>
              <Col
                style={{
                  backgroundColor: "#fff000",
                }}
                xs={3}
              >
                2 of 3 (wider)
              </Col>
              <Col
                style={{
                  backgroundColor: "#ff0000",
                }}
                xs="auto"
              >
                3 of 3
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ProductWindow;
