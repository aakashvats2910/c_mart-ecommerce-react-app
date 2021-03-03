import React, { Component } from "react";
import HeaderBar from "./headerbar";
import "./css/myorderswindow.css";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";

var itemsArray = [
  {
    productName: "Nvidia GPU",
    quantity: "2",
    costPerQuantity: "40,000",
    totalCost: "80,000",
    productId: "#D443FED76",
  },
  {
    productName: "Intel i7 10th gen CPU",
    quantity: "3",
    costPerQuantity: "30,000",
    totalCost: "90,000",
    productId: "#FG43FED76",
  },
];

class MyCart extends Component {
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
          <Container
            style={{
              backgroundColor: "rgba(246,246,246, 1)",
              padding: 20,
              textAlign: "left",
            }}
            fluid
          >
            <Container fluid>
              <Row>
                <Col sm={3}>
                  <p
                    style={{
                      fontSize: 50,
                    }}
                  >
                    My Cart
                  </p>
                </Col>
                <Col
                  className="top-layout text-secondary"
                  sm={3}
                  style={{
                    fontSize: 14,
                  }}
                >
                  View and edit all your favourite products of you wish to buy
                  from here.
                </Col>
              </Row>
            </Container>

            <Order
              expectedDate="March 23 2021"
              productsList={itemsArray}
            ></Order>
          </Container>
        </div>
      </div>
    );
  }
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

const Item = ({
  productName,
  quantity,
  costPerQuantity,
  totalCost,
  productId,
}) => (
  <div>
    <Row>
      <Col sm={3}>
        <img src="/img/banner/gpudemo.png" className="order-mage"></img>
      </Col>
      <Col sm={3}>
        <h5>{productName}</h5>
        <p className="text-secondary">
          Quantity: {quantity}
          <br />
          Cost per quantity: {costPerQuantity}
          <br />
          Total Cost: {totalCost}
        </p>
      </Col>
      <Col sm={2}>
        <h5>Product Id</h5>
        <p className="text-secondary">{productId}</p>
      </Col>
      <Col sm={2}>
        <Button variant="danger">
          <img src="/img/icons/trash.png" className="icon-image"></img>
        </Button>
      </Col>
    </Row>
    <ColoredLine color="rgba(246,246,246, 1)"></ColoredLine>
  </div>
);

const Order = ({ expectedDate, totalAmount, productsList }) => (
  <Card
    style={{
      marginBottom: 20,
    }}
    body
  >
    <Row>
      <Col xs={3}>
        <h5>
          <Button variant="light">
            Expected Date <Badge variant="light">{expectedDate}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </h5>
      </Col>
      <Col xs={6}></Col>
      <Col>{/* <Button variant="warning">Track Order</Button> */}</Col>
    </Row>
    <ColoredLine color="red" />

    {itemsInit(productsList)}

    {/* <Item
      productName="Geforce GPU"
      quantity="2"
      costPerQuantity="20,000"
      totalCost="40,000"
      productId="#DDF3267UH"
    /> */}

    <Row>
      <Col xs={6}></Col>
      <Col xs={2}>
        <h5>
          <Button variant="light">
            Total Amount <Badge variant="light">{totalAmount}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </h5>
      </Col>
      <Col>
        <Button variant="success">Place Order</Button>
      </Col>
    </Row>
  </Card>
);

function itemsInit(array) {
  let b = "";
  const itemsToReturn = [];
  for (var i = 0; i <= array.length - 1; i++) {
    const element = array[i];
    let itm = (
      <Item
        productName={element.productName}
        quantity={element.quantity}
        costPerQuantity={element.costPerQuantity}
        totalCost={element.totalCost}
        productId={element.productId}
      ></Item>
    );
    itemsToReturn.push(itm);
  }
  return itemsToReturn;
}

export default MyCart;
