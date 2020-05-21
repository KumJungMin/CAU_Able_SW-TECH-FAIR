
import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import './style.css'

//pk.eyJ1Ijoia3VtanVuZ21pbiIsImEiOiJjazJ6aXNjdXUwNXgwM25wNmx4MWVsZ2drIn0.EOZ3aEMSHymhZX8oKdKoPQ

    
    
const Map = (props) => {
    const storeList = [
        { name: 'CU', location: [props.Latitude, props.Longitude] }]
    
    const MAP_TOKEN = 'pk.eyJ1Ijoia3VtanVuZ21pbiIsImEiOiJjazJ6aXNjdXUwNXgwM25wNmx4MWVsZ2drIn0.EOZ3aEMSHymhZX8oKdKoPQ';
    const [ viewport, setViewport ] = useState({
    latitude: props.Latitude,
    longitude: props.Longitude,
    width: '90vw',
    height: '40vh',
    zoom: 12
    });
    return (
        <div className="Mapbox">
        <ReactMapGL
        {...viewport}
        transitionInterpolator={new FlyToInterpolator()}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => {
        setViewport(viewport);
        }}
        >
        <div className="navi-control">
        {/* <NavigationControl /> */}
        </div>
        {
        storeList.map((store, i) => (
        <Marker
        key={i}
        latitude={store.location[0]}
        longitude={store.location[1]}
        >
        <button
        className="btn-marker"
        />
        </Marker>
        ))
        }
        </ReactMapGL>
        </div>
        
        
    );
    };
    
    
                
   
   
export default Map;
    
    
   // 출처: https://im-developer.tistory.com/161 [Code Playground]