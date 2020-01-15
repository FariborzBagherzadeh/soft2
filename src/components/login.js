import { MDBBtn } from "mdbreact";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false
    };
  }
  change_mode = () => {
    this.setState({
      radio1: this.state.radio1 === true ? false : true,
      radio2: this.state.radio2 === false ? true : false
    });
  };
  render() {
    return [
      
      <img src="main_login.jpg" id="pic_login" alt=""/>,
      <form id="log" action="/">
        <br />
        <div>
          <h1 style={{ textShadow: "1px 1px 1px #000000" }}>Get Start</h1>
        </div>
        <br />
        <TextField
          color="secondary"
          required={true}
          style={{ width: "60%" }}
          id="standard-basic"
          label="Fullname"
          variant="standard"
        />
        <br />
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
        <TextField
          color="secondary"
          required={true}
          style={{ width: "60%" }}
          id="standard-password-input"
          label="Confirm password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <br />
        <br />
        <TextField
          style={{ width: "60%" }}
          required={true}
          color="secondary"
          id="date"
          label="Birthday"
          type="date"
          defaultValue={new Date()}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br /> <br />
        <form action="" style={{ marginLeft: "-35%" }}>
          Male
          <Radio
            onClick={() => this.change_mode()}
            checked={this.state.radio1}
            value="a"
            name="radio-button"
          />
          Female
          <Radio
            onClick={() => this.change_mode()}
            checked={this.state.radio2}
            value="b"
            name="radio-button"
          />
        </form>
        <Checkbox
          style={{ marginLeft: "19%", float: "left" }}
          value="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <p style={{ float: "left", marginTop: "1.5%" }}>
          {" "}
          I accept privacy and policy
        </p>
        <br /> <br /> <br />
        <MDBBtn type="submit" id="btn_login" variant="standard">
          Sign Up
        </MDBBtn>
      </form>
    ];
  }
}
