import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./screens/HomePage";
import cartScreen from "./screens/cartScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={cartScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
