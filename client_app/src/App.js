import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./screens/HomePage";
import CartScreen from "./screens/CartScreen";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartScreen} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
