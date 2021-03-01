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
import "./css/headbar.css";
import logoImg from "./img/logo.png";

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
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoImg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Cmart
          </Navbar.Brand>
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

        {/* <div className="article">
          <img src={mainBgImg} className="article-bg hw" />
          <h1 class="heading">Article Heading</h1>
          <h2 class="author">Author Name</h2>
          <div style={{ position: "absolute", zIndex: 900, top: 300 }}>
            <p>ABCD</p>
            <p>ABCD</p>
            <p>ABCD</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default HeaderBar;
