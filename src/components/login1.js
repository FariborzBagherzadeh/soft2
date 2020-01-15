import { MDBBtn } from "mdbreact";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
export default class Login1 extends Component {
  render() {
    return [
      <img src="main_login.jpg" id="pic_login" alt=""/>,
      <form id="log" style={{ height: "76vh" }} action="/">
        <br />
        <div>
          <h1 style={{ textShadow: "1px 1px 1px #000000" }}>Sign In</h1>
        </div>
        <br />
        <TextField
          color="secondary"
          required={true}
          style={{ width: "60%" }}
          id="standard-basic"
          label="E-mail"
          variant="standard"
        />
        <br /> <br />
        <TextField
          color="secondary"
          required={true}
          style={{ width: "60%" }}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <br /> <br />
        <Checkbox
          style={{ marginLeft: "18%", float: "left" }}
          value="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <p style={{ float: "left", marginTop: "2%" }}> Remember me</p>
        <br /> <br />
        <a href="/Sign_Up" style={{ float: "left", marginLeft: "-18%" }}>
          Don't have an account?Sign up
        </a>
        <br /> <br /> <br />
        <MDBBtn type="submit" id="btn_login" variant="standard">
          Sign Up
        </MDBBtn>
      </form>
    ];
  }
}
