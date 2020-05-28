import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Map({ style = { width: 300, height: 300 } }) {
  const mapEl = useRef();
  const map = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (mapEl.current && window.google) {
        const center = {
          lat: 35.5404724,
          lng: -106.1238175,
        };

        map.current = new window.google.maps.Map(mapEl.current, {
          center,
          zoom: 13,
        });

        new window.google.maps.Marker({ position: center, map: map.current });
      }
    }, 500);
  }, []);

  return (
    <>
      <Helmet>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEwDCN8bx0bwsqNCROkjQEHltNQlx4udE&v=3.exp&libraries=geometry,drawing,places"
        ></script>
      </Helmet>
      <div style={style} ref={mapEl} />
    </>
  );
}
