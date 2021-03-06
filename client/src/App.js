import React from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingLIst";
import ItemModal from "./components/itemModel";
import { Container } from "reactstrap";

import store from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
