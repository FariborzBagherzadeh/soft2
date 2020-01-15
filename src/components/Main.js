import React, { Component } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
export default class Main extends Component {
  state = {
    text: "Search",
    spiner: "",
    key: ""
  };
  changeButton = () => {
    this.setState({
      text: "",
      spiner: "<Spinner animation='border' role='status'></Spinner>",
      key: "true"
    });
  };
  changSpin = () => {
    if (
      this.state.spiner ===
      "<Spinner animation='border' role='status'></Spinner>"
    ) {
      return <Spinner animation="border" role="status"></Spinner>;
    }
  };

  render() {
    return [
      <Element name="header" style={{ marginTop: "2%" }} className="element" />,

      <Form
        style={{
          marginTop: "14%",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <TextField
          color="secondary"
          required
          style={{ width: "100%" }}
          id="standard-basic"
          label="Search"
          variant="standard"
        />{" "}
        <br /> <br />
        <FormControl
          style={{ width: "100%", textAlign: "left" }}
          color="secondary"
        >
          <InputLabel id="demo-simple-select-label">Your Skill</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="Front-End">Front-End</MenuItem>
            <MenuItem value="Back-End">Back-End</MenuItem>
            <MenuItem value="Full-Dev">Full-Dev</MenuItem>
          </Select>
        </FormControl>
        <br/> <br/>
        <FormControl
          style={{ width: "100%", textAlign: "left" }}
          color="secondary"
        >
          <InputLabel id="demo-simple-select-label" my>
            Back-End Frame Works
          </InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="Laravel">Laravel</MenuItem>
            <MenuItem value="Django">Django</MenuItem>
            <MenuItem value="NodeJs">NodeJs</MenuItem>
            <MenuItem value="Asp.net">Asp.net</MenuItem>
          </Select>
        </FormControl>
        <Button
          id="search_btn"
          variant="default"
          size="sm"
          block
          htmlType="submit"
          disabled={this.state.key}
          onClick={() => {
            this.changeButton();
          }}
        >
          {this.changSpin()}
          {this.state.text}
        </Button>
      </Form>
    ];
  }
}
