// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react"
import Slider from "react-slick"
import { Fade } from "@mui/material"
import { Box, Container } from "@mui/material"

export default function ImageSlider(_images) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    scrollable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }


  return (
    <Box style={style}>
      <Container>Hello</Container>
    </Box>
  )

  //   return (
  //     <Slider {...settings}>
  //       {images?.map((image) => {
  //         return <div style={style}>Hello</div>
  //       })}
  //     </Slider>
  //   )
}
