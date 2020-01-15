import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import { SocialIcon } from "react-social-icons";
export default class FooterPagePro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height_instagram: 50,
      width_instagram: 50,
      height_twitter: 50,
      width_twitter: 50,
      height_whatsapp: 50,
      width_whatsapp: 50
    };
  }
  changeSocial_instagram = () => {
    this.setState({
      height_instagram: this.state.height_instagram === 50 ? 60 : 50,
      width_instagram: this.state.width_instagram === 50 ? 60 : 50
    });
  };
  changeSocial_twitter = () => {
    this.setState({
      height_twitter: this.state.height_twitter === 50 ? 60 : 50,
      width_twitter: this.state.width_twitter === 50 ? 60 : 50
    });
  };
  changeSocial_whatsapp = () => {
    this.setState({
      height_whatsapp: this.state.height_whatsapp === 50 ? 60 : 50,
      width_whatsapp: this.state.width_whatsapp === 50 ? 60 : 50
    });
  };
  render() {
    return [
      <MDBFooter
        id="footer"
        color="special-color-dark"
        className=" pt-4 mt-4"
        style={{ fontSize: "1.2em" }}
      >
        <MDBContainer className="text-center text-md-right">
          <MDBRow className="text-center text-md-right mt-3 pb-3">
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Back Up</h6>
              <p>
                <a href="#" className="footer_link">Your Account</a>
              </p>
              <p>
                <a href="#" className="footer_link">Forgot Password</a>
              </p>
              <p>
                <a href="#" className="footer_link">Help </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3" >
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Contact Us
              </h6>
              <p>
                <i className="fa fa-envelope mr-3" />
                fariborz.miad22222222@gmail.com
              </p>

              <p>
                <i className="fa fa-print mr-3" />
                09360666384
              </p>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Site</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                 since the 1500s, when an unknown printer took a galley of type and
                 scrambled it to make a type specimen book.</p>
            </MDBCol>
          </MDBRow>

          <hr />

          <MDBRow>
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="#!"> Name.com </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://instagram.com"
                      style={{
                        height: this.state.height_instagram,
                        width: this.state.width_instagram
                      }}
                      onMouseEnter={() => {
                        this.changeSocial_instagram();
                      }}
                      onMouseLeave={() => {
                        this.changeSocial_instagram();
                      }}
                    />
                  </li>
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://twitter.com"
                      style={{
                        height: this.state.height_twitter,
                        width: this.state.width_twitter
                      }}
                      onMouseEnter={() => {
                        this.changeSocial_twitter();
                      }}
                      onMouseLeave={() => {
                        this.changeSocial_twitter();
                      }}
                    />
                  </li>
                  <li className="list-inline-item">
                    <SocialIcon
                      className="social"
                      bgColor="#FFFFFF"
                      url="http://whatsapp.com"
                      style={{
                        height: this.state.height_whatsapp,
                        width: this.state.width_whatsapp
                      }}
                      onMouseEnter={() => {
                        this.changeSocial_whatsapp();
                      }}
                      onMouseLeave={() => {
                        this.changeSocial_whatsapp();
                      }}
                    />
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    ];
  }
}
