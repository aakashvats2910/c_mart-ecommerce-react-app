import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FooterFragment from "./footerFragment";
import HeaderBar from "./headerbar";
import {
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Breadcrumb,
  Card,
  CardDeck,
} from "react-bootstrap";
import "./css/categorywindow.css";

class CategoryWindow extends Component {
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
          {/* Code goes here */}
          <Container
            style={{
              backgroundColor: "rgba(255,255,255,1)",
              paddingBottom: 20,
              paddingTop: 10,
            }}
            fluid
          >
            <Container fluid>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Search
                </Breadcrumb.Item>
                <Breadcrumb.Item active>GPU</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
            <Row>
              <Col
                style={{
                  textAlign: "left",
                }}
                xs={2}
              >
                {/* Filter code goes here */}

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Price Range</Form.Label>
                    <Form.Control type="range" />
                  </Form.Group>
                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Brands
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check label="Company 1" />
                        <Form.Check label="Company 2" />
                        <Form.Check label="Company 3" />
                      </Col>
                    </Form.Group>
                  </fieldset>

                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Discount
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check label="10%" />
                        <Form.Check label="20%" />
                        <Form.Check label="30%" />
                      </Col>
                    </Form.Group>
                  </fieldset>

                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Sort Price
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="High to Low"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="Low to High"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Form>
              </Col>

              <Col
                sm={9}
                style={{
                  marginLeft: 5,
                }}
              >
                {/* Content / catalog code goes here */}
                <p>Search results for: 'motherboard'</p>
                <Container
                  style={{
                    textAlign: "left",
                    backgroundColor: "rgba(246,246,246,1)",
                    padding: 30,
                  }}
                  fluid
                >
                  <CategoryProductRow></CategoryProductRow>
                  {/* <CategoryProductRow></CategoryProductRow> */}
                </Container>
              </Col>
            </Row>
          </Container>
          <FooterFragment></FooterFragment>
        </div>
      </div>
    );
  }
}

class CategoryProductRow extends Component {
  state = {};
  render() {
    return (
      <CardDeck
        style={{
          marginBottom: 20,
        }}
      >
        <CategoryProductCard
          title="Product 1"
          desc="This is the description of the product which is to be put in that area"
          bottomText="Sales end in 3 min"
        ></CategoryProductCard>
        <CategoryProductCard
          title="Product 1"
          desc="This is the description of the product which is to be put in that area"
          bottomText="Sales end in 3 min"
        ></CategoryProductCard>
        <CategoryProductCard
          title="Product 1"
          desc="This is the description of the product which is to be put in that area"
          bottomText="Sales end in 3 min"
        ></CategoryProductCard>
        <CategoryProductCard
          title="Product 1"
          desc="This is the description of the product which is to be put in that area"
          bottomText="Sales end in 3 min"
        ></CategoryProductCard>
      </CardDeck>
    );
  }
}

class CategoryProductCard extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/rDUjBwz.png" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{this.props.bottomText}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default CategoryWindow;
