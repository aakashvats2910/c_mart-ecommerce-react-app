import "./App.css";
import HeaderBar from "./components/headerbar";
import LoginWindow from "./components/loginWindow";
import RegistrationWindow from "./components/registrationWindow";
import HomeWindow from "./components/home";

function App() {
  return (
    <div className="App">
      {/* <HeaderBar></HeaderBar> */}
      {/* <LoginWindow></LoginWindow> */}
      {/* <RegistrationWindow></RegistrationWindow> */}
      <HomeWindow></HomeWindow>
    </div>
  );
}

export default App;
