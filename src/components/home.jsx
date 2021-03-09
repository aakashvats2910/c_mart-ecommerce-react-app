import React, { Component } from "react";
import HeaderBar from "./headerbar";
import "./css/home.css";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  CardDeck,
  Nav,
  Navbar,
  Form,
  FormControl,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";
import { CardGroup, Card } from "react-bootstrap";
import bannerOneImg from "./img/banner/bannerone.png";
import bannerTwoImg from "./img/banner/bannertwo.png";
import bannerThreeImg from "./img/banner/bannerthree.png";
import truckImg from "./img/icons/truck.png";
import returnImg from "./img/icons/return.png";
import supportImg from "./img/icons/support.png";
import secureImg from "./img/icons/secure.png";
import ReactPlayer from "react-player";
import FooterFragment from "./footerFragment";

class HomeWindow extends Component {
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
          <BannerCarousel></BannerCarousel>
          <FeaturesContainer></FeaturesContainer>
          <SmallCategory></SmallCategory>
          <HorizontalLine></HorizontalLine>
          <Container
            style={{
              paddingBottom: 10,
              backgroundColor: "rgba(246,246,246, 1)",
            }}
            fluid
          >
            <p
              style={{
                fontSize: 50,
                color: "#ff0000",
              }}
              className="font-weight-bold gradient-text"
            >
              Hot Deals!
            </p>
          </Container>
          <SaleItemsFragment></SaleItemsFragment>
          <FooterFragment />
          {/* <FooterFragment></FooterFragment> */}
        </div>
      </div>
    );
  }
}

class HorizontalLine extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          height: 1,
          backgroundColor: "rgba(246,246,246, 1)",
          paddingBottom: 40,
        }}
        fluid
      >
        <Container
          style={{
            height: 1,
            backgroundColor: "rgba(191, 191, 191, 1)",
          }}
        ></Container>
      </Container>
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
        <Carousel controls={false}>
          <Carousel.Item>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  src="/img/banner/intel_i_seven_tenth.png"
                />
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Img
                  variant="top"
                  src="/img/banner/intel_i_seven_tenth.png"
                />
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="/img/banner/intel_i_seven_tenth.png"
                />
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="/img/banner/intel_i_seven_tenth.png"
                />
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Img
                  variant="top"
                  src="/img/banner/intel_i_seven_tenth.png"
                />
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Carousel.Item>

          <Carousel.Item>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="/img/banner/gpudemo.png" />
                <Card.Body>
                  <Card.Title>Geforce GPU</Card.Title>
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="/img/banner/gpudemo.png" />
                <Card.Body>
                  <Card.Title>Geforce GPU</Card.Title>
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="/img/banner/gpudemo.png" />
                <Card.Body>
                  <Card.Title>Geforce GPU</Card.Title>
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="/img/banner/gpudemo.png" />
                <Card.Body>
                  <Card.Title>Geforce GPU</Card.Title>
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="/img/banner/gpudemo.png" />
                <Card.Body>
                  <Card.Title>Geforce GPU</Card.Title>
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
                    <img src="/img/icons/heart.png" className="icon-image" />
                  </Button>
                  <Button variant="link">Buy now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Sale ends on 31st March</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

class SmallCategory extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgb(246,246,246, 1)",
          paddingBottom: 30,
        }}
        className="w-100"
        fluid
      >
        <Container>
          <Container>
            <Row>
              <Col sm={8}>
                <Card.Img
                  position="absolute"
                  src="/img/banner/webcam.png"
                  style={{
                    padding: 10,
                  }}
                ></Card.Img>
              </Col>
              <Col sm={4}>
                <Card.Img
                  src="/img/banner/headphone.png"
                  style={{
                    padding: 9,
                    marginTop: 5,
                  }}
                ></Card.Img>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <Card.Img
                  src="/img/banner/mousebanner.png"
                  style={{
                    padding: 9,
                    marginTop: 5,
                  }}
                ></Card.Img>
              </Col>
              <Col sm={8}>
                <Card.Img
                  src="/img/banner/harddisk.png"
                  style={{
                    padding: 10,
                  }}
                ></Card.Img>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  }
}

class FeaturesContainer extends Component {
  state = {};
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgb(246,246,246)",
          paddingTop: 30,
          paddingBottom: 30,
        }}
        className="w-100"
        fluid
      >
        <Container
          style={{
            textAlign: "center",
          }}
        >
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src={truckImg}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 40,
                }}
                className="card-mage"
              />
              <Card.Body>
                <Card.Title>Free Delivery</Card.Title>
                <Card.Text>Free Shipping on all orders.</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={returnImg}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 40,
                }}
                className="card-mage"
              />
              <Card.Body>
                <Card.Title>Return Policy</Card.Title>
                <Card.Text>Easy return, no questions asked!</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={supportImg}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 40,
                }}
                className="card-mage"
              />
              <Card.Body>
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>Got problem, ask anytime! </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={secureImg}
                style={{
                  height: 50,
                  width: 50,
                  marginTop: 40,
                }}
                className="card-mage"
              />
              <Card.Body>
                <Card.Title>Secure Payment</Card.Title>
                <Card.Text>Fast and secure across all devices.</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </Container>
    );
  }
}

class BannerCarousel extends Component {
  state = {};
  render() {
    return (
      <Carousel
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Carousel.Item>
          <img className="w-100 h-100" src={bannerOneImg} alt="First slide" />
          {/* <Carousel.Caption>
            <h3
              style={{
                marginTop: 50,
              }}
            >
              First slide label
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 h-100" src={bannerTwoImg} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 h-100" src={bannerThreeImg} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomeWindow;
