import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider1 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <>
        
        <Slider {...settings}>
            <div  className="full-screen-block slider1_1">
                <div className="sliderTitleBlock">
                    <h3 className= "homeSliderTitleTop">Creative Ideas</h3>
                    <h1 className= "homeSliderTitle"> Unlock your <br/> <span>potential</span></h1>
                </div>
            </div>
            <div   className="full-screen-block slider1_2">
                <div className="sliderTitleBlock">
                    <h3 className= "homeSliderTitleTop">Our Philosophy</h3>
                    <h1 className= "homeSliderTitle"> Increase your  <br/> <span>productivity</span></h1>    
                </div>
            </div>
        </Slider>
      </>
    );
  }
}