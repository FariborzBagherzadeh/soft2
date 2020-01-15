import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { MDBBtn } from "mdbreact";
export default class Resume_Input extends Component {
  render() {
    return [
      <div id="full_color"></div>,
      <form id="form_resume" action="">
        <br />
        <h1>Start</h1>
        <TextField
          color="secondary"
          required={true}
          style={{ width: "60%" }}
          id="standard-basic"
          label="Full Name"
          variant="standard"
        />
        <br /> <br />
        <FormControl
          style={{ width: "60%", textAlign: "left" }}
          color="secondary"
        >
          <InputLabel id="demo-simple-select-label">Your Skill</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="Front-End">Front-End</MenuItem>
            <MenuItem value="Back-End">Back-End</MenuItem>
            <MenuItem value="Full-Dev">Full-Dev</MenuItem>
          </Select>
        </FormControl>
        <br /> <br />
        <FormControl
          style={{ width: "60%", textAlign: "left" }}
          color="secondary"
        >
          <InputLabel id="demo-simple-select-label">
            Front-End Frame Works
          </InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="ReacJs">ReactJs</MenuItem>
            <MenuItem value="AngularJs">AngularJs</MenuItem>
            <MenuItem value="VueJs">VueJs</MenuItem>
            <MenuItem value="Flutter">Flutter</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl
          style={{ width: "60%", textAlign: "left" }}
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
        <br /> <br />
        <h4>Upload Your Resume</h4>
        <br />
        <label htmlFor="contained-button-file">
          <input
            style={{ display: "none" }}
            accept="image/*"
            className="btn_input"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" color="secondary" component="span">
            Upload
          </Button>
        </label>
        <br /> <br />
        <TextField
          style={{ width: "60%" }}
          color="secondary"
          id="standard-multiline-static"
          label="About Youeself"
          multiline
          rows="4"
        />
        <br /> <br /> <br />
        <MDBBtn type="submit" id="btn_login" variant="standard">
          Submit
        </MDBBtn>
        <br /> <br />
      </form>
    ];
  }
}
