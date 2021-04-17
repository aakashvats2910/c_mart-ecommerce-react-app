import React, { Component } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router";
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
import { Fire } from "./backend/firebase";
import Staticdata from "./backend/staticjs";

class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerheight: 65,
      headerTextSize: 20,
      buttonText: "Login with Goggle",
      categoryToSearch: "",
      redirect: false,
    };

    Fire.passHeaderBarInstance(this);
    // Fire.addAuthChangedListener();
    this.handleLoginProcess = this.handleLoginProcess.bind(this);
    this.handleSearchButtonClicked = this.handleSearchButtonClicked.bind(this);
    this.setButtonName();
  }

  setButtonName() {
    // if (Staticdata.username == "") {
    //   console.log("()()()() USRNM : " + Staticdata.username);
    //   this.state.buttonText = "Login with Google";
    // } else {
    //   this.state.buttonText = Staticdata.username + " - Logout";
    // }
    if (Staticdata.username == "") {
      // console.log("()()()() USRNM : " + Staticdata.username);
      // this.setState({ buttonText: Staticdata.username });
      // this.state.buttonText = Staticdata.username;
    } else {
      console.log("()()()() USRNM : " + Staticdata.username);
      // this.setState({ buttonText: Staticdata.username + " - Logout" });
      this.state.buttonText = Staticdata.username + " - Logout";
    }
  }

  headerLinkStyle = {
    marginLeft: 20,
    fontSize: 14,
    cursor: "pointer",
    color: "#FF3D00",
    textTransform: "uppercase",
  };

  setRedirect = () => {
    console.log(this.state.categoryToSearch);
    Staticdata.category = this.state.categoryToSearch;
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/category" />;
    }
  };

  handleLoginProcess() {
    if (this.state.buttonText.includes("Logout")) {
      Fire.logout();
    } else {
      var uid = Fire.loginWithGoogle();
      console.log("()()()() UID : " + uid);

      // this.setState({ buttonText: "Aakash Sharma" });
    }
  }

  handleSearchtextChanged(category) {
    this.state.categoryToSearch = category;
  }

  handleSearchButtonClicked() {
    this.history.push("/login");

    // Fire.searchForCategoryAndSaveInStatic(this.state.categoryToSearch);
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="home">
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
            {/* <NavDropdown title="Shop" id="collasible-nav-dropdown">
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
            </NavDropdown> */}
            <Nav.Link href="#pricing" href="/myorders">
              My Orders
            </Nav.Link>

            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(event) =>
                this.handleSearchtextChanged(event.target.value)
              }
            />
            <Button
              variant="outline-light"
              // onClick={this.handleSearchButtonClicked}
              onClick={this.setRedirect}
            >
              Search
            </Button>

            <Button
              variant="outline-info"
              style={{
                marginLeft: 50,
              }}
              onClick={this.handleLoginProcess}
            >
              {this.state.buttonText}
            </Button>
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
