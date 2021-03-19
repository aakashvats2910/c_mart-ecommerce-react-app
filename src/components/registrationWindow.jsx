import React, { Component } from "react";
import HeaderBar from "./headerbar";
import "./css/registrationwindow.css";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import bgDesertImg from "./img/backgrounddesert.jpg";
import bgMontImg from "./img/backgroundmont.jpg";
import "./js/connection.js";
import { Fire } from "../components/backend/firebase";

class RegistrationWindow extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <div className="top-div">
          {/* All the code goes inside this */}
          <div
            style={{
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 15,
              marginBottom: 15,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="form-background"
          >
            <div
              style={{
                padding: 20,
              }}
              className="w-100"
            >
              <h1
                style={{
                  marginBottom: 50,
                }}
              >
                Just sign up - get ready to shop!
              </h1>
              <RegistrationWindowFragment></RegistrationWindowFragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class RegistrationWindowFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      passwd: "",
      email: "",
      cpasswd: "",
      addOne: "",
      addTwo: "",
      state: "",
      city: "",
      zip: "",
    };
    this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
  }

  onRegisterButtonClick() {
    // console.log("WOW");
    // console.log(this.state);
    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
    // console.log(this.state.email);
    // console.log(this.state.mobileNumber);
    // run().catch(console.dir);
    console.log(this.state);
    Fire.addUserInDB(
      this.state.email,
      this.state.passwd,
      this.state.firstName,
      this.state.lastName,
      this.state.mobileNumber,
      this.state.addOne,
      this.state.addTwo,
      this.state.city,
      this.state.state,
      this.state.zip
    );
  }

  //   state = {
  //     firstName: "",
  //     lastName: "",
  //     mobileNumber: "",
  //     passwd: "",
  //     email: "",
  //     cpasswd: "",
  //     addOne: "",
  //     addTwo: "",
  //     state: "",
  //     city: "",
  //     zip: "",
  //   };

  handleFirstnameChange(fName) {
    // console.log("frst naaam: " + fName);
    this.state.firstName = fName;
  }

  handleLastNameChange(lName) {
    this.state.lastName = lName;
  }

  handleMobileNumberChange(number) {
    this.state.mobileNumber = number;
    // let isnum = /^\d+$/.test(number);
    // if (isnum) {
    //   this.state.mobileNumber = number;
    // } else {
    //   console.log("Not A Number");
    // }
  }

  handleEmailChange(email) {
    this.state.email = email;
  }

  handlePasswordChange(passwd) {
    this.state.passwd = passwd;
    // let passwdExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // let result = passwdExpression.test(passwd);
    // if (result) {
    //   console.log("gg passwd");
    // } else {
    //   console.log("bg passwd");
    // }
  }

  handleConfirmPasswordChange(cpasswd) {
    this.state.cpasswd = cpasswd;
  }

  handleAddressOnehange(addOne) {
    this.state.addOne = addOne;
  }

  handleAddressTwoChange(addTwo) {
    this.state.addTwo = addTwo;
  }

  handleCityChange(city) {
    this.state.city = city;
  }

  handleStateChange(state) {
    this.state.state = state;
  }

  handleZipChange(zip) {
    this.state.zip = zip;
  }

  render() {
    return (
      <Form
        style={{
          textAlign: "left",
        }}
        className="form-layout"
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First name"
              onChange={(event) =>
                this.handleFirstnameChange(event.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last name"
              onChange={(event) =>
                this.handleLastNameChange(event.target.value)
              }
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Mobile</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>+91</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroupMobile"
                placeholder="Mobile"
                onChange={(event) =>
                  this.handleMobileNumberChange(event.target.value)
                }
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroupEmail"
                placeholder="Email"
                onChange={(event) => this.handleEmailChange(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            onChange={(event) => this.handlePasswordChange(event.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formGridConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            onChange={(event) =>
              this.handleConfirmPasswordChange(event.target.value)
            }
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            onChange={(event) => this.handleAddressOnehange(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            onChange={(event) =>
              this.handleAddressTwoChange(event.target.value)
            }
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="City"
              onChange={(event) => this.handleCityChange(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              onChange={(event) => this.handleStateChange(event.target.value)}
            >
              <option>Choose state...</option>
              <option>Andhra Pradesh</option>
              <option>Arunanchal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar pradesh</option>
              <option>Uttrakhand</option>
              <option>West Bengal</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra and Nagar Haveli and Daman and Diu</option>
              <option>Delhi</option>
              <option>Jammu and Kashmir</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="Zip"
              onChange={(event) => this.handleZipChange(event.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Button
          variant="primary"
          type="button"
          onClick={this.onRegisterButtonClick}
        >
          Register
        </Button>

        <Form.Group
          style={{
            marginTop: 10,
            textAlign: "center",
          }}
          controlId="formBasicCheckbox"
        >
          <Button variant="link">Already have account? Log in instead</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default RegistrationWindow;
