import React, { Component } from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'



class MapContainer extends Component {
    render() {
        const style = {
        width: '100%',
        height: '100%'
      }

      if (!this.props.loaded) {
        return <div>Loading props...</div>
      }
        return (
            <div style={style}>
            {(!this.props.loaded) ? <div>Loading props...</div> : null}
                <Map 
                    google={window.google} 

                    initialCenter={{
                        lat: 44.498955,
                        lng: 11.327591
                    }}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCQXfP2INKUp8h2rQTDfQkKTdpTOu5uOuM")
})(MapContainer)