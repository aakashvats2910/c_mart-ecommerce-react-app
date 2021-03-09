import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";

class FooterFragment extends Component {
  state = {};
  render() {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "rgba(34,34,34,255)",
          color: "rgba(105,109,99,255)",
          paddingBottom: 50,
          paddingTop: 100,
        }}
      >
        <Container
          style={{
            textAlign: "left",
          }}
        >
          <Row>
            <Col>
              <p className="font-weight-bold text-light">About Us</p>
              <p className="font-weight-normal text-muted">
                Cmart is dedicated to 100% customer delight ensuring that
                everything from placing your order to delivering it right to
                your doorstep is smooth and hassle-free.
              </p>
            </Col>
            <Col>
              <p className="font-weight-bold text-light">Newsletter</p>
              <p className="font-weight-normal text-muted">
                Stay update with our latest news
              </p>
              <Form>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="inlineFormInputGroup" placeholder="Email" />
                </InputGroup>
                <Button variant="dark">Submit</Button>
              </Form>
            </Col>
            <Col>
              <p className="font-weight-bold text-light">Contact Us</p>
              <p className="font-weight-normal text-muted">Contact us here</p>
              <Form>
                <Col>
                  {/* <img
                      src="/img/icons/placeholder.png"
                      className="icon-image"
                    ></img> */}

                  <Row
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Col sm={1}>
                      <img
                        src="/img/icons/placeholder.png"
                        className="icon-image"
                      ></img>
                    </Col>
                    <Col className="text-light" sm={4}>
                      MMDU(Mullana), Ambala
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Col sm={1}>
                      <img
                        src="/img/icons/email.png"
                        className="icon-image"
                      ></img>
                    </Col>
                    <Col className="text-light" sm={4}>
                      aakashvats2910@gmail.com
                    </Col>
                  </Row>

                  <Row
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <Col sm={1}>
                      <img
                        src="/img/icons/phone.png"
                        className="icon-image"
                      ></img>
                    </Col>
                    <Col className="text-light" sm={4}>
                      (+91)7494970025
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Col>
            <Col>
              <p className="font-weight-bold text-light">Policies</p>
              <p className="font-weight-normal text-muted">
                Policies of our store
              </p>
              <Button variant="link">> Privacy Policy</Button>
              <Button variant="link">> Refund Policy</Button>
              <Button variant="link">> Shipping Policy</Button>
              <Button variant="link">> Terms & Conditions</Button>
            </Col>
          </Row>
          <Row>
            <p>Copyright © 2021 All rights reserved by Cmart online store</p>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default FooterFragment;
