import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import categoryApi from "./api/categoryApi";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import logo from "./logo.svg";
import Product from "./pages/Product/Product";
import Counter from "./redux/Couter/index";
import Swap from "./redux/Swap/index";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Switch>
        <Route path="/" component={TodoList} exact />
        <Route path="/counter" component={Counter} />
        <Route path="/swap" component={Swap} />
        <Route path="/products" component={Product} />
      </Switch>
      {/* <TodoList />
      <Counter />
      <Swap /> */}
    </div>
  );
}

export default App;
