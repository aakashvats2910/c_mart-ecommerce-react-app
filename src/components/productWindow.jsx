import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  ListGroup,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  CardDeck,
  Nav,
  Breadcrumb,
} from "react-bootstrap";
import HeaderBar from "./headerbar";
import "./css/productwindow.css";
import FooterFragment from "./footerFragment";
import Staticdata from "./backend/staticjs";
import { Fire } from "./backend/firebase";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Add to cart
  </Tooltip>
);

class ProductWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "=Name=",
      price: "=Price=",
      discountedPrice: "",
      description: [],
      productId: "=dd",
      images: "",
      youSave: "",
      discountP: "",
      imagesList: [],
    };

    Fire.passCProductInstance(this);
    Fire.searchForProductData();

    console.log(Staticdata.product);
    this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
  }

  onBuyButtonClick() {
    console.log("Buying product : " + Staticdata.product);
    Fire.buyThisProduct();
    window.alert("Product Done");
  }

  getImageCaraousal() {
    var toReturn = [];
    for (var i = 0; i <= this.state.imagesList.length - 1; i++) {
      var elem = this.state.imagesList[i];
      let toAdd = (
        <Carousel.Item>
          <img src={elem} className="showcase-mage"></img>
        </Carousel.Item>
      );
      toReturn.push(toAdd);
    }
    return toReturn;
  }

  getDescriptionLists() {
    var toReturn = [];
    for (var i = 0; i <= this.state.description.length - 1; i++) {
      var elem = this.state.description[i];
      let toAdd = (
        <ListGroup.Item>
          <img src="/img/icons/tag.png" className="icon-image" />
          &nbsp;&nbsp; {elem}
        </ListGroup.Item>
      );
      toReturn.push(toAdd);
    }
    return toReturn;
  }

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
              textAlign: "left",
              paddingBottom: 20,
              paddingTop: 10,
            }}
            fluid
          >
            <Breadcrumb
              style={{
                backgroundColor: "rgba(246,246,246, 1)",
              }}
            >
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                {Staticdata.category}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{this.state.productId}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col xs={5}>
                {/* Code for image carousel goes here */}
                <Carousel
                  style={{
                    backgroundColor: "rgba(246,246,246, 1)",
                  }}
                >
                  {this.getImageCaraousal()}
                  {/* <Carousel.Item>
                    <img
                      src="/img/banner/pccasedemo.png"
                      className="showcase-mage"
                    ></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/img/banner/pccasedemo.png"
                      className="showcase-mage"
                    ></img>
                  </Carousel.Item> */}
                </Carousel>
              </Col>
              <Col xs={4}>
                <Row>
                  <h4>
                    <p
                      className="font-weight-normal"
                      style={{
                        padding: 20,
                        paddingBottom: 0,
                      }}
                    >
                      {this.state.name}
                    </p>
                  </h4>
                </Row>
                <Card fluid>
                  <ListGroup variant="flush">
                    {this.getDescriptionLists()}
                  </ListGroup>
                </Card>
              </Col>
              <Col
                xs="auto"
                style={{
                  paddingTop: 20,
                }}
              >
                <Container fluid>
                  <Card>
                    <p
                      style={{
                        paddingLeft: 20,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}
                      className="text-secondary"
                    >
                      M.R.P.:{" "}
                      <span
                        style={{
                          fontSize: 15,
                          color: "#ff0000",
                        }}
                      >
                        &ensp;<del>{this.state.price}</del>
                      </span>
                      <br />
                      Price:{" "}
                      <span
                        style={{
                          fontSize: 18,
                        }}
                      >
                        &ensp;{this.state.discountedPrice}
                      </span>
                      <br />
                      You Save:{" "}
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgba(0, 177, 106, 1)",
                        }}
                      >
                        &ensp;{this.state.youSave}{" "}
                        <span
                          style={{
                            fontSize: 22,
                          }}
                        >
                          {this.state.discountP}
                        </span>
                      </span>
                    </p>
                    <Card.Body>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          {/* <Form.Label>Apply promo code</Form.Label>
                          <Form.Control type="email" placeholder="Code" /> */}
                          <Form.Text className="text-muted">
                            Buy your product without any hesitation.
                          </Form.Text>
                        </Form.Group>
                        {/* <Button variant="outline-secondary">Apply</Button> */}
                        <Row
                          style={{
                            paddingLeft: 15,
                            paddingTop: 20,
                          }}
                        >
                          <Button
                            variant="success"
                            style={{
                              marginRight: 10,
                            }}
                            onClick={this.onBuyButtonClick}
                          >
                            Buy Now
                          </Button>
                        </Row>
                        {/* <Row
                          style={{
                            paddingLeft: 15,
                            paddingTop: 20,
                          }}
                        >
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <Button variant="danger">
                              <img
                                src="/img/icons/shopping-cart.png"
                                className="icon-image"
                              />{" "}
                              Add to cart
                            </Button>
                          </OverlayTrigger>
                        </Row> */}
                      </Form>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
            </Row>
          </Container>
          <SaleItemsFragment></SaleItemsFragment>
          <FooterFragment></FooterFragment>
        </div>
      </div>
    );
  }
}

class SaleItemsFragment extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgba(246,246,246, 1)",
          paddingBottom: 30,
        }}
        fluid
      >
        <Container
          fluid
          style={{
            height: 1,
            backgroundColor: "#000000",
            marginBottom: 10,
          }}
        ></Container>
        <p
          style={{
            fontSize: 20,
          }}
        >
          Some other products you may like
        </p>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="/img/banner/intel_i_seven_tenth.png" />
            <Card.Body>
              <Card.Title>Intel i7 10th Gen Sale</Card.Title>
              <Card.Text
                style={{
                  color: "rgba(42, 187, 155, 1)",
                }}
              >
                ₹ 20,000{" "}
                <span
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;₹ <del>35,000</del>{" "}
                </span>
              </Card.Text>
              <Button
                variant="danger"
                style={{
                  marginRight: 10,
                }}
              >
                <img
                  src="/img/icons/shopping-cart.png"
                  className="icon-image"
                />
              </Button>
              <Button variant="link">Buy now</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sale ends on 31st March</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="/img/banner/intel_i_seven_tenth.png" />
            <Card.Body>
              <Card.Title>Intel i7 10th Gen Sale</Card.Title>
              <Card.Text
                style={{
                  color: "rgba(42, 187, 155, 1)",
                }}
              >
                ₹ 20,000{" "}
                <span
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;₹ <del>35,000</del>{" "}
                </span>
              </Card.Text>
              <Button
                variant="danger"
                style={{
                  marginRight: 10,
                }}
              >
                <img
                  src="/img/icons/shopping-cart.png"
                  className="icon-image"
                />
              </Button>
              <Button variant="link">Buy now</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sale ends on 31st March</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/img/banner/intel_i_seven_tenth.png" />
            <Card.Body>
              <Card.Title>Intel i7 10th Gen Sale</Card.Title>
              <Card.Text
                style={{
                  color: "rgba(42, 187, 155, 1)",
                }}
              >
                ₹ 20,000{" "}
                <span
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;₹ <del>35,000</del>{" "}
                </span>
              </Card.Text>
              <Button
                variant="danger"
                style={{
                  marginRight: 10,
                }}
              >
                <img
                  src="/img/icons/shopping-cart.png"
                  className="icon-image"
                />
              </Button>
              <Button variant="link">Buy now</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sale ends on 31st March</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/img/banner/intel_i_seven_tenth.png" />
            <Card.Body>
              <Card.Title>Intel i7 10th Gen Sale</Card.Title>
              <Card.Text
                style={{
                  color: "rgba(42, 187, 155, 1)",
                }}
              >
                ₹ 20,000{" "}
                <span
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;₹ <del>35,000</del>{" "}
                </span>
              </Card.Text>
              <Button
                variant="danger"
                style={{
                  marginRight: 10,
                }}
              >
                <img
                  src="/img/icons/shopping-cart.png"
                  className="icon-image"
                />
              </Button>
              <Button variant="link">Buy now</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sale ends on 31st March</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="/img/banner/intel_i_seven_tenth.png" />
            <Card.Body>
              <Card.Title>Intel i7 10th Gen Sale</Card.Title>
              <Card.Text
                style={{
                  color: "rgba(42, 187, 155, 1)",
                }}
              >
                ₹ 20,000{" "}
                <span
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;₹ <del>35,000</del>{" "}
                </span>
              </Card.Text>
              <Button
                variant="danger"
                style={{
                  marginRight: 10,
                }}
              >
                <img
                  src="/img/icons/shopping-cart.png"
                  className="icon-image"
                />
              </Button>
              <Button variant="link">Buy now</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sale ends on 31st March</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default ProductWindow;
