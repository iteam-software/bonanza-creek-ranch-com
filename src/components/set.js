import React from "react";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useLightbox, SRLWrapper } from "simple-react-lightbox";

import Flex from "./flex";

export default function Set({ thumbnail, title, body, gallery }) {
  const { openLightbox } = useLightbox();
  const images = gallery.map(image => {
    return {
      src: image.file.url,
    };
  });

  return (
    <>
      <Flex style={{ marginBottom: 40 }}>
        <div onClick={openLightbox} style={{ cursor: "pointer" }} role="button">
          <Img
            style={{ marginRight: 20, marginTop: 10, width: 227, height: 161 }}
            fluid={thumbnail.fluid}
          />
        </div>
        <Flex direction="column" style={{ flex: 1, alignItems: "flex-start" }}>
          <h4 className="set-title">{title}</h4>
          <div style={{ lineHeight: "1.05em" }}>
            {documentToReactComponents(body)}
          </div>
          <a href="javascript:;" className="link" onClick={_openLightbox}>
            Photos
          </a>
        </Flex>
      </Flex>
      <SRLWrapper
        images={images}
        options={{
          buttons: {
            showFullscreenButton: false,
            showDownloadButton: false,
          },
        }}
      />
    </>
  );

  function _openLightbox(event) {
    if (event) {
      event.preventDefault();
    }

    openLightbox();
  }
}
