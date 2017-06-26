// import React, { Component } from 'react';
//
// class GoogleMap extends Component {
//   componentDidMount() {
//     new google.mpas.Map(this.refs.map, {
//       zoom: 12,
//       center: {
//         lat: this.props.lat,
//         lng: this.props.lon
//       }
//     });
//   }
//
//   render() {
//     return <div ref="map" />;
//   }
//
// }
//
// export default GoogleMap;

// import React from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
//
// export default (props) => {
//   return (
//     <GoogleMapLoader
//       containerElement={ <div sytle={{height: '100%'}} /> }
//       googleMapElement={
//         <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//       }
//       />
//   );
// }

import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
