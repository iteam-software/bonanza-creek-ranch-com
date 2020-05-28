import React from "react";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import "./portfolio.scss";

export default function Portfolio({ images, children }) {
  const { openLightbox } = useLightbox();
  return (
    <div className="portfolio" onClick={openLightbox} role="button">
      <SRLWrapper
        images={images}
        options={{
          buttons: {
            showFullscreenButton: false,
            showDownloadButton: false,
          },
        }}
      />
      {children}
    </div>
  );
}
