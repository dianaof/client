import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import Cities from "./views/Cities";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import "materialize-css/dist/css/materialize.min.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
