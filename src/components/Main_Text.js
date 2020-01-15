import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MDBBtn } from "mdbreact";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Main_Text extends Component {
  render() {
    return (
      <div>
        <Fade left cascade>
          <div id="img_header">
            <img src="header.jpg" alt="" />
          </div>
        </Fade>
        <Fade right cascade>
          <div className="float-right" id="text_header">
            <h1>
              <p
                class="font-weight-bold"
                style={{ textShadow: "1px 1px 3px #000000" }}
              >
                What is Lorem Ipsum?
              </p>
            </h1>
            <div style={{ textAlign: "center" }}>
              <h3>
                <br />
                <p>Lorem Ipsum is simply dummy texts</p>
                <p> of the printing and typesetting lorem</p>
                <p>Lorem Ipsum has been the industry's</p>
              </h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <form action="/Sign_Up">
                <TextField
                  required={true}
                  color="secondary"
                  style={{ width: "60%" }}
                  id="standard-basic"
                  label="E-mail"
                  variant="standard"
                />
                <br /> <br /> <br />
                <MDBBtn
                  type="submit"
                  id="btn_email"
                  variant="standard"
                  color="secondry"
                >
                  Start
                </MDBBtn>
              </form>
            </div>
          </div>
          <div style={{ marginTop: "-7%" }}>
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={1200}
              onSetActive={this.handleSetActive}
            >
              <Jump forever={true} delay={0} duration={1500}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img id="down_arrow" src="down-arrow.png" alt="" />
                </div>
              </Jump>
            </Link>
          </div>
        </Fade>
      </div>
    );
  }
}
