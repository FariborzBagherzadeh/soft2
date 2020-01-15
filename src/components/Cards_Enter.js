import React, { Component } from "react";

export default class Cards_Enter extends Component {
  render() {
    return [
      <div style={{ float: "" }}>
        <h1>JavaScript</h1>
        <h4>Name: </h4>
        <h4>{"be soorate prop"}</h4>
        <h4>Main Specialty:</h4>
        <h4>{"be soorate prop"}</h4>
        <h4>Experience:</h4>
        <h4>{"be soorate prop"}</h4>
        <h4>City: </h4>
        <h4>{"be soorate prop"}</h4>
        <h4>Contact: </h4>
        <h4>{"be soorate prop"}</h4>
        <h4>About: </h4>
        <h4>{"be soorate prop"}</h4>
        <h2>
          <a href="#">Resume</a>
        </h2>
      </div>,
      <img
        style={{
          float: "right",
          maxWidth: "550px",
          height: "75vh",
          marginTop: "-37%",
          marginRight:"15%",
          borderRadius: "20px",
          boxShadow: "1px -4px 5px -1px black"
        }}
        src="1.jpg"
        alt=""
      />
    ];
  }
}
