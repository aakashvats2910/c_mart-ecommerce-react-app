import React, { Component } from "react";
import HeaderBar from "./headerbar";
import "./css/home.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import bannerOneImg from "./img/banner/bannerone.png";
import bannerTwoImg from "./img/banner/bannertwo.png";
import bannerThreeImg from "./img/banner/bannerthree.png";

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
          <Container
            style={{
              backgroundColor: "#fff000",
            }}
            className="w-100"
            fluid
          >
            <Row>
              <Col>1 of 1</Col>
            </Row>
          </Container>
        </div>
      </div>
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
