import React, { Component } from "react";
import HeaderBar from "./headerbar";
import "./css/loginwindow.css";
import loginImg from "./img/login.jpg";
import { Form, Button } from "react-bootstrap";
import bgComputerImg from "./img/bg_computer.jpg";
import { Fire } from "../components/backend/firebase";

class LoginWindow extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <div
          style={{
            top: 60,
            position: "absolute",
          }}
          className="w-100"
        >
          <div
            style={{
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 100,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="w-70"
          >
            <div
              className="w-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                float: "left",
              }}
            >
              <div className="image">
                <img className="article-bg w-100" src={bgComputerImg} alt="" />

                <div
                  style={{
                    position: "absolute",
                    zIndex: 900,
                    top: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                  className="w-100 h-100"
                >
                  <div
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                    className="login-text-style"
                  >
                    <h1
                      style={{
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      Login
                    </h1>

                    <p
                      style={{
                        padding: 10,
                      }}
                    >
                      No worries, we got you covered. Just login to our website
                      and get your preference and wishlist saved just for you.
                    </p>
                  </div>
                </div>
                {/* <h2>
                  A Movie in the Park:
                  <br />
                  Kung Fu Panda
                </h2> */}
              </div>

              {/* <img src={loginImg} className="article-bg w-100 h-100" />
              <p>ABCD</p> */}
            </div>

            <div
              className="w-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                float: "right",
              }}
            >
              <div className="image">
                <img
                  className="article-bg w-100"
                  src={bgComputerImg}
                  style={{ visibility: "hidden" }}
                  alt=""
                />

                {/* <h2>
                  A Movie in the Park:
                  <br />
                  Kung Fu Panda
                </h2> */}

                <Form className="form-style">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Form.Group
                    style={{
                      marginTop: 10,
                      textAlign: "center",
                    }}
                    controlId="formBasicCheckbox"
                  >
                    <Button variant="link">New user? Sign up instead</Button>
                  </Form.Group>
                </Form>
              </div>

              {/* <img src={loginImg} className="article-bg w-100 h-100" />
              <p>ABCD</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
