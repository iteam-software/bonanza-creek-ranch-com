import React from "react";
import { string, arrayOf } from "prop-types";
import Carousel from "react-bootstrap/Carousel";

import "./splash.css";

export default function Splash({ imgUrl, images = [] }) {
  if (images.length > 0) {
    const items = images.map(image => (
      <Carousel.Item key={image}>
        <img src={image} role="presentation" />
      </Carousel.Item>
    ));
    return <Carousel>{items}</Carousel>;
  }

  if (!imgUrl) {
    return null;
  }

  return (
    <div className="splash" style={{ backgroundImage: `url(${imgUrl})` }}></div>
  );
}

Splash.propTypes = {
  imgUrl: string,
  images: arrayOf(string),
};
