import React, { Component } from "react"
import Slider from "react-slick"
import PortfolioItem from '../Portfolio/PortfolioItem'
import { videos } from '../../videos/videosSlider'

export default class SliderThreeItem extends Component {

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 400000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    return (
      <>
        <Slider {...settings}>
          {
            videos.map((video) => (
              <div key={video.id}>
                <PortfolioItem videoTitle={video.title} videoDesc={video.description}
                  videoSrc={process.env.PUBLIC_URL + '/videos/videosSlider/' + video.url} />
              </div>
            ))
          }
        </Slider>
      </>
    );
  }
}