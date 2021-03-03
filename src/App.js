import "./App.css";
import HeaderBar from "./components/headerbar";
import LoginWindow from "./components/loginWindow";
import RegistrationWindow from "./components/registrationWindow";
import HomeWindow from "./components/home";
import MyOrders from "./components/myordersWindow";
import MyCart from "./components/mycartWindow";
import ProductWindow from "./components/productWindow";

function App() {
  return (
    <div className="App">
      {/* <HeaderBar></HeaderBar> */}
      {/* <LoginWindow></LoginWindow> */}
      {/* <RegistrationWindow></RegistrationWindow> */}
      {/* <HomeWindow></HomeWindow> */}
      {/* <MyOrders></MyOrders> */}
      <MyCart></MyCart>
      {/* <ProductWindow></ProductWindow> */}
    </div>
  );
}

export default App;
