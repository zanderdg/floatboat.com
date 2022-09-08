import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapComp = (props) => {
  const containerStyle = {
    // position: "relative",
    width: "100%",
    height: "100%",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        position: "relative",
        //   padding: "50px 30px",
        margin: "0 auto",
      }}
    >
      <Map
        google={props.google}
        zoom={10}
        //   style={containerStyle}
        initialCenter={{
          lat: props.lat,
          // lat: props.lat ? props.lat : 40.854885,
          lng: props.lng,
          // lng: props.lng ? props.lng : -88.081807,
        }}
        // initialCenter={{
        //   lat: 40.854885,
        //   lng: -88.081807,
        // }}
        // onClick={this.onMapClicked}
      >
        <Marker
          //   onClick={this.onMarkerClick}
          name={"Current location"}
        />

        <InfoWindow
        //   onClose={this.onInfoWindowClose}
        >
          <div>
            <h1>name</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAaRQXkJw7rAgRBwRZ9aIz7akmbNa9Zrvo",
})(MapComp);
