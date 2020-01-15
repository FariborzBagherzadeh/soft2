import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Main_Text from "./components/Main_Text";
import FooterPagePro from "./components/Footer";
import CardsDeck from "./components/Cards";
import Pagination from "./components/Pagination";
import Login from "./components/login";
import Login1 from "./components/login1";
import { BrowserRouter, Route } from "react-router-dom";
import Cards_Enter from "./components/Cards_Enter";
import Resume_Input from "./components/Resume_Input"
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

const Home = props => {
  return [
    <NavBar />,
    <Main_Text />,
    <Main />,
    <CardsDeck />,
    <Pagination />,
    <FooterPagePro />
  ];
};
const Sign_In = props => {
  return [<NavBar />, <Login1 />, <FooterPagePro />];
};
const Card = props => {
  return [<NavBar />, <Cards_Enter />, <FooterPagePro />];
};
const Sign_Up = props => {
  return [<NavBar />, <Login />, <FooterPagePro />];
};
const Resume = props => {
  return [<NavBar />, <Resume_Input/>,<FooterPagePro />];
};
class App extends Component {
  render() {
    return [
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Sign_In" component={Sign_In} />
          <Route exact path="/Sign_Up" component={Sign_Up} />
          <Route exact path="/Card" component={Card} />
          <Route exact path="/Resume" component={Resume}/>
        </div>
      </BrowserRouter>
    ];
  }
}
export default App;
