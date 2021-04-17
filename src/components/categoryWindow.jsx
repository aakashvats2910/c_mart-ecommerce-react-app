import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FooterFragment from "./footerFragment";
import HeaderBar from "./headerbar";
import {
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Breadcrumb,
  Card,
  CardDeck,
} from "react-bootstrap";
import "./css/categorywindow.css";
import { Fire } from "./backend/firebase";
import Staticdata from "./backend/staticjs";
import { Link } from "react-router-dom";

class CategoryWindow extends Component {
  constructor(props) {
    super(props);
    Fire.passCategoryInstance(this);
    Fire.searchForCategoryAndSaveInStatic(Staticdata.category);
    console.log("Static category: " + Staticdata.category);

    this.state = {
      listToShow: [],
    };
  }

  handleProductCardClick(prodKey) {
    console.log(prodKey);
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
          {/* Code goes here */}
          <Container
            style={{
              backgroundColor: "rgba(255,255,255,1)",
              paddingBottom: 20,
              paddingTop: 10,
            }}
            fluid
          >
            <Container fluid>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Search
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{Staticdata.category}</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
            <Row>
              <Col
                style={{
                  textAlign: "left",
                }}
                xs={2}
              >
                {/* Filter code goes here */}

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Price Range</Form.Label>
                    <Form.Control type="range" />
                  </Form.Group>
                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Brands
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check label="Company 1" />
                        <Form.Check label="Company 2" />
                        <Form.Check label="Company 3" />
                      </Col>
                    </Form.Group>
                  </fieldset>

                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Discount
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check label="10%" />
                        <Form.Check label="20%" />
                        <Form.Check label="30%" />
                      </Col>
                    </Form.Group>
                  </fieldset>

                  <fieldset>
                    <Form.Group as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        Sort Price
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="High to Low"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="Low to High"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Form>
              </Col>

              <Col
                sm={9}
                style={{
                  marginLeft: 5,
                }}
              >
                {/* Content / catalog code goes here */}
                <p>Search results for: '{Staticdata.category}'</p>
                <Container
                  style={{
                    textAlign: "left",
                    backgroundColor: "rgba(246,246,246,1)",
                    padding: 30,
                  }}
                  fluid
                >
                  {getCategoryProductRows(this.state.listToShow)}
                </Container>
              </Col>
            </Row>
          </Container>
          <FooterFragment></FooterFragment>
        </div>
      </div>
    );
  }
}

function getCategoryProductRows(listOfCards) {
  var total = listOfCards.length;
  var toReturn = [];
  var tempAr = [];
  var toRun = 1;
  for (let i = 0; i < total; i++) {
    tempAr.push(listOfCards[i]);
    console.log(toRun);
    if (toRun == 5) {
      let itm = <CategoryProductRow listOfCards={tempAr}></CategoryProductRow>;
      toReturn.push(itm);
      toRun = 1;
      tempAr = [];
      continue;
    }
    if (i == total - 1) {
      let itm = <CategoryProductRow listOfCards={tempAr}></CategoryProductRow>;
      toReturn.push(itm);
      toRun = 1;
      tempAr = [];
      continue;
    }
    toRun = toRun + 1;
  }
  console.log("To return" + toReturn.length);
  return toReturn;
}

function getRowOfCard(listOfCards) {
  const itemToReturn = [];
  for (var i = 0; i < listOfCards.length; i++) {
    const element = listOfCards[i];
    console.log("KEY : " + element.uid);
    let itm = (
      <CategoryProductCard
        title={element.name}
        desc={element.description}
        bottomText={"With a discount of " + element.discountP + " %"}
        imageThousand={element.imageThousand}
        uid={element.uid}
      ></CategoryProductCard>
    );
    itemToReturn.push(itm);
  }
  return itemToReturn;
}

const CategoryProductRow = ({ listOfCards }) => (
  <CardDeck
    style={{
      marginBottom: 20,
    }}
  >
    {getRowOfCard(listOfCards)}
  </CardDeck>
);

class CategoryProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.key,
      redirect: false,
    };

    this.handleProductCardClick = this.handleProductCardClick.bind(this);
  }

  setRedirect = () => {
    Staticdata.product = this.props.uid;
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/product" />;
    }
  };

  handleProductCardClick() {
    console.log("Product key is : " + this.props.uid);
  }

  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        onClick={console.log("Product card clicked")}
        onClick={this.setRedirect}
      >
        {this.renderRedirect()}
        {/* <Card.Img variant="top" src="https://i.imgur.com/rDUjBwz.png" /> */}
        <Card.Img variant="top" src={this.props.imageThousand} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Card.Text>{"ABCD " + this.props.uid}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{this.props.bottomText}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default CategoryWindow;
