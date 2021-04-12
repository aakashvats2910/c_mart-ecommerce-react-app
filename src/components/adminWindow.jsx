import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Fire } from "./backend/firebase";
import Product from "./backend/productClass";
import HeaderBar from "./headerbar";

class AdminWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
      price: "",
      discountP: "",
      imageThousand: "",
      otherImages: "",
      value: "",
    };
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleProductPrice = this.handleProductPrice.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmitButtonClick() {
    console.log("Submit button clicked!");
    console.log(this.state);
    Fire.addProductInDB(
      this.state.name,
      this.state.category,
      this.state.description,
      this.state.price,
      this.state.discountP,
      this.state.imageThousand,
      this.state.imageThousand,
      this.state.otherImages
    );
  }

  handleProductName(pName) {
    this.state.name = pName;
  }

  handleProductCategory(pCategory) {
    this.state.category = pCategory;
  }

  handleProductDescription(pDescription) {
    this.state.description = pDescription;
  }

  handleProductPrice(event) {
    let price_string = event.target.value;

    // check if string contains any letters or special characters (except for comma)

    price_string = price_string.replaceAll(",", "");
    console.log("before : " + price_string);
    price_string = this.convertNumberToIndianFormat(price_string);
    console.log("after : " + price_string);
    this.setState({ price: price_string });
    // this.state.tempPrice = this.state.tempPrice + "--";
  }

  convertNumberToIndianFormat(number_string) {
    var x = number_string;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  handleDiscountPercentage(pDiscountP) {
    this.state.discountP = pDiscountP;
  }

  handleImageThousandRes(pImageThousand) {
    this.state.imageThousand = pImageThousand;
  }

  handleOtherImages(pOtherImages) {
    this.state.otherImages = pOtherImages;
  }

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
                  <Col xs={6}>
                    <Form.Control type="text" placeholder="Product ID" />
                  </Col>
                  <Col>
                    <Button variant="warning" type="button">
                      Search
                    </Button>
                  </Col>
                </Form.Row>
              </Container>

              <Form>
                <Form.Group controlId="formBasicProductName">
                  <Form.Label>Product Name *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Product Name"
                    onChange={(event) =>
                      this.handleProductName(event.target.value)
                    }
                  />
                  <Form.Text className="text-muted">
                    This will be the main title which will pe presented to the
                    customer for a product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductCategory">
                  <Form.Label>Product Category *</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      this.handleProductCategory(event.target.value)
                    }
                    type="text"
                    placeholder="Category"
                  />
                  <Form.Text className="text-muted">
                    This will be the category of the product which will help
                    customer to get the product when he/she searches for a
                    particular category.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductDesc">
                  <Form.Label>Product Description *</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      this.handleProductDescription(event.target.value)
                    }
                    type="text"
                    placeholder="Description"
                  />
                  <Form.Text className="text-muted">
                    This will give the brief details about the product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductPrice">
                  <Form.Label>Price *</Form.Label>
                  <Form.Control
                    onChange={this.handleProductPrice}
                    type="text"
                    placeholder="Price"
                    value={this.state.price}
                    // value={this.state.value}
                    // onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    This is the base price for the product.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductDiscountPercent">
                  <Form.Label>Discount Percentage</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      this.handleDiscountPercentage(event.target.value)
                    }
                    type="text"
                    placeholder="Percentage of discount (0 < value < 100), default value is 0"
                  />
                  <Form.Text className="text-muted">
                    This is the percent of the discount which will be given on
                    the original price.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductThousandResImg">
                  <Form.Label>Add Image (1000x1000) resolution *</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      this.handleImageThousandRes(event.target.value)
                    }
                    type="text"
                    placeholder="Url of image of 1000x1000 resolution"
                  />
                  <Form.Text className="text-muted">
                    Add Image (1000x1000) resolution
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicProductMultImg">
                  <Form.Label>Add Image (960x1080) resolution *</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      this.handleOtherImages(event.target.value)
                    }
                    type="text"
                    placeholder="Other Images url (Multiple url separated by comma)"
                  />
                  <Form.Text className="text-muted">
                    This is the percent of the discount which will be given on
                    the original price.
                  </Form.Text>
                </Form.Group>

                <Button
                  variant="success"
                  type="button"
                  onClick={this.onSubmitButtonClick}
                >
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
