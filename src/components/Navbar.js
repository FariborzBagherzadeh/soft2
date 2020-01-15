import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
export default class NavBar extends Component {
  render() {
    return [
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#7B1FA2",
          fontSize: "120%"
        }}
        sticky="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{ margin: "5px", marginRight: "65%" }}>
            <Nav.Link href="/" className="wtf">
              Home
            </Nav.Link>
            <Nav.Link href="#rules" className="wtf">
              Help
            </Nav.Link>

            <Nav.Link href="/Resume" className="wtf">
              Resume
            </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Web" id="dpn-hover">
                Web
              </NavDropdown.Item>
              <NavDropdown.Item href="#ML" id="dpn-hover">
                ML
              </NavDropdown.Item>
              <NavDropdown.Item href="#Android" id="dpn-hover">
                Android
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="Sign_In" style={{ marginLeft: "9%" }}>
          <img id="user_pic" src="user.png" alt=""  />
          <MDBBtn
            id="btn_sign"
            style={{
              borderRadius: "50px",
              marginLeft: "30%"
            }}
          >
            Login
          </MDBBtn>
        </Navbar.Brand>
      </Navbar>
    ];
  }
}
