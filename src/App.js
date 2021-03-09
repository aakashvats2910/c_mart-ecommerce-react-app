import "./App.css";
import HeaderBar from "./components/headerbar";
import LoginWindow from "./components/loginWindow";
import RegistrationWindow from "./components/registrationWindow";
import HomeWindow from "./components/home";
import MyOrders from "./components/myordersWindow";
import MyCart from "./components/mycartWindow";
import ProductWindow from "./components/productWindow";
import FooterFragment from "./components/footerFragment";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CategoryWindow from "./components/categoryWindow";
import AdminWindow from "./components/adminWindow";

const HomeRoute = () => (
  <div>
    <HomeWindow></HomeWindow>
  </div>
);

const MyOrdersRoute = () => (
  <div>
    <MyOrders></MyOrders>
  </div>
);

const LoginRoute = () => (
  <div>
    <LoginWindow></LoginWindow>
  </div>
);

const RegisterRoute = () => (
  <div>
    <RegistrationWindow></RegistrationWindow>
  </div>
);

const MyCartRoute = () => (
  <div>
    <MyCart></MyCart>
  </div>
);

const ProductRoute = () => (
  <div>
    <ProductWindow></ProductWindow>
  </div>
);

const CategoryRoute = () => (
  <div>
    <CategoryWindow></CategoryWindow>
  </div>
);

const AdminProductRoute = () => (
  <div>
    <AdminWindow></AdminWindow>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <HeaderBar></HeaderBar> */}
      {/* <LoginWindow></LoginWindow> */}
      {/* <RegistrationWindow></RegistrationWindow> */}
      {/* <HomeWindow></HomeWindow> */}
      {/* <MyOrders></MyOrders> */}
      {/* <MyCart></MyCart> */}
      {/* <ProductWindow></ProductWindow> */}
      {/* <FooterFragment></FooterFragment> */}

      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomeRoute} exact={true} />
          <Route path="/" component={HomeRoute} exact={true} />
          <Route path="/myorders" component={MyOrdersRoute}></Route>
          <Route path="/login" component={LoginRoute}></Route>
          <Route path="/register" component={RegisterRoute}></Route>
          <Route path="/mycart" component={MyCartRoute}></Route>
          <Route path="/product" component={ProductRoute}></Route>
          <Route path="/category" component={CategoryRoute}></Route>
          <Route path="/admin" component={AdminProductRoute}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
