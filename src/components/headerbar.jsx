import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import mainBgImg from "./img/banner-bg.jpg";
import ReactPlayer from "react-player";
// import "bootstrap/dist/css/bootstrap.css";

class HeaderBar extends Component {
  state = {
    headerheight: 65,
    headerTextSize: 20,
  };

  headerLinkStyle = {
    marginLeft: 20,
    fontSize: 14,
    cursor: "pointer",
    color: "#FF3D00",
    textTransform: "uppercase",
  };

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Dream Build</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Shop Category
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Product Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Shopping Cart
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Product Checkout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">My Orders</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <div>
          <img style={{ zIndex: 1 }} className="w-100" src={mainBgImg}></img>
          <p
            style={{
              zIndex: 10,
            }}
          >
            Hello this is ddd text
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
