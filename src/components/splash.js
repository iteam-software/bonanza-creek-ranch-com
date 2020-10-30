import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img from "gatsby-image"

import "./splash.css";

export default function Splash({ imgUrl, images }) {
  if (images && images.length > 0) {
    const items = images.map(image => {
      return(
      <Carousel.Item key={image.id}>
        <Img fluid={image.childImageSharp.fluid} role="presentation"></Img>
      </Carousel.Item>
      )
    });
    return <Carousel>{items}</Carousel>;
  }

  if (!imgUrl) {
    return null;
  }

  return (
    //<div className="splash" style={{ backgroundImage: `url(${imgUrl})` }}></div>
    <div className="splash">
      <Img fluid={imgUrl}></Img>
    </div>
  );
}
