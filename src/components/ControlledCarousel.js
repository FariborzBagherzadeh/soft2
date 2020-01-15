import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/open-animation";
export default class ControlledCarousel extends Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <AutoplaySlider
        style={{ maxHeight: "550px",color:"red" }}
        cssModule={AwesomeSliderStyles}
        play={true}
        cancelOnInteraction={false}
        interval={3000}
      >
        <div style={{ maxHeight: "625px" }} data-src="1.jpg" />
        <div style={{ maxHeight: "625px" }} data-src="2.jpg" />
        <div style={{ maxHeight: "625px" }} data-src="3.jpg" />
      </AutoplaySlider>
    );
  }
}
