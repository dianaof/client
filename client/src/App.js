import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Landing from "./views/Landing";
import Cities from "./views/Cities";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Itinerary from "./views/Itinerary";
// import Logout from "./views/Logout";
import "materialize-css/dist/css/materialize.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <SideBar />
          <Switch id="page-wrap">
            <Route exact path="/" component={Landing} />
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/users" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/itineraries/:city_id" component={Itinerary} />
            {/* <Route path="/logout" component={Logout} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
