import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderBar from "./headerbar";

class AdminWindow extends Component {
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
            fluid
            style={{
              textAlign: "left",
              backgroundColor: "rgba(246,246,246, 1)",
            }}
          >
            <Container fluid>
              <Row>
                <Col sm={4}>
                  <p
                    style={{
                      fontSize: 50,
                    }}
                  >
                    Products Manager
                  </p>
                </Col>
                <Col
                  className="top-layout text-secondary"
                  sm={3}
                  style={{
                    fontSize: 14,
                  }}
                >
                  View, edit, delete, add Sale any product from here with single
                  window management.
                </Col>
              </Row>
            </Container>
            <Container
              fluid
              style={{
                padding: 20,
              }}
            >
              <Container
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Row>
                  <Form.Label column lg={2}>
                    Product ID
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Product ID" />
                  </Col>
                </Form.Row>
              </Container>

              <Form>
                <Form.Group controlId="formBasicProductName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="email" placeholder="Product Name" />
                  <Form.Text className="text-muted">
                    This will be the main title which will pe presented to the
                    customer for a product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control type="password" placeholder="Category" />
                  <Form.Text className="text-muted">
                    This will be the category of the product which will help
                    customer to get the product when he/she searches for a
                    particular category.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductDesc">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control type="password" placeholder="Description" />
                  <Form.Text className="text-muted">
                    This will give the brief details about the product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="password" placeholder="Price" />
                  <Form.Text className="text-muted">
                    This is the base price for the product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductDiscountPercent">
                  <Form.Label>Discount Percentage</Form.Label>
                  <Form.Control type="password" placeholder="Price" />
                  <Form.Text className="text-muted">
                    This is the percent of the discount which will be given on
                    the original price.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductThousandResImg">
                  <Form.Label>Add Image (1000x1000) resolution</Form.Label>
                  <Form.Control type="password" placeholder="Price" />
                  <Form.Text className="text-muted">
                    This is the percent of the discount which will be given on
                    the original price.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductMultImg">
                  <Form.Label>
                    Add Image (960x1080) resolution (Multiple images allowed
                    with , between them)
                  </Form.Label>
                  <Form.Control type="password" placeholder="Price" />
                  <Form.Text className="text-muted">
                    This is the percent of the discount which will be given on
                    the original price.
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

export default AdminWindow;
