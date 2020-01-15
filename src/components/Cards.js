import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from "mdbreact";
import { Element, animateScroll as scroll } from "react-scroll";

class CardsDeck extends Component {
  render() {
    return [
      <Element name="cards" style={{ marginTop: "-8%" }} className="element" />,
      <div className="mid_card">
        <Zoom cascade>
          <MDBRow
            className="card_row"
            style={{
              marginTop: "15%"
            }}
          >
            <MDBCol className="card_hover">
              <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src="1.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard narrow>
                <MDBCardImage cascade className="img-fluid" src="2.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src="3.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Zoom>
      </div>,
      <div className="mid_card">
        <Zoom cascade>
          <MDBRow className="card_row">
            <MDBCol className="card_hover">
              <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src="1.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard narrow>
                <MDBCardImage cascade className="img-fluid" src="2.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src="3.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Zoom>
      </div>,
      <div className="mid_card">
        <Zoom cascade>
          <MDBRow className="card_row">
            <MDBCol className="card_hover">
              <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src="1.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard narrow>
                <MDBCardImage cascade className="img-fluid" src="2.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="card_hover">
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src="3.jpg" />
                <MDBCardBody cascade>
                  <MDBCardTitle className="title_cards">
                    javaScript
                  </MDBCardTitle>
                  <MDBCardText className="text_cards">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </MDBCardText>
                  <MDBBtn href="/Card" className="btn_cards">
                    More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Zoom>
      </div>
    ];
  }
}

export default CardsDeck;
