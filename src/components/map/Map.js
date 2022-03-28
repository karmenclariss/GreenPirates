import React, { useState } from "react";
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { GoogleMap, useLoadScript, Marker, InfoWindow, KmlLayer} from "@react-google-maps/api";
import * as ewasteData from "./e-waste-recycling-geojson.json";
import * as lightingData from "./lighting-waste-collection-points-geojson.json";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    width: "98.93vw",
    height: "85vh",
};
const center = {
    lat: 1.3521,
    lng: 103.8198,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}


// E-waste DataSet
var { features } = ewasteData;
const ewastes = features;
// console.log(features[0].geometry.coordinates[0]);
// console.log(features[0].geometry.coordinates[1]);


// Lighting-waste DataSet
var { features } = lightingData;
const lightings = features;


export default function Map() {
    const [selectedPoint, setSelectedPoint] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBL0wqyCym-8QPPVK-ZME2-trqeA89EN7c",
        libraries,
    })

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
        >
            {ewastes.map(ewaste => (
                <Marker
                    key={ewaste.properties.Name}
                    position={{
                        lat: ewaste.geometry.coordinates[1],
                        lng: ewaste.geometry.coordinates[0]
                    }}
                    icon={{
                        url: "https://upload.wikimedia.org/wikipedia/commons/archive/7/7b/20130326143134%21Recycling_symbol.svg",
                        scaledSize: new window.google.maps.Size(25, 25),
                    }}
                    onClick={() => {
                        setSelectedPoint(ewaste);
                    }}
                />
            ))}

            {lightings.map(lighting => (
                <Marker
                    key={lighting.properties.Name}
                    position={{
                        lat: lighting.geometry.coordinates[1],
                        lng: lighting.geometry.coordinates[0]
                    }}
                    icon={{
                        url: "https://www.svgrepo.com/show/89902/incandescent-light-bulb.svg",
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                    onClick={() => {
                        setSelectedPoint(lighting);
                    }}
                />
            ))}

            {selectedPoint && (
                <InfoWindow
                    position={{
                        lat: selectedPoint.geometry.coordinates[1],
                        lng: selectedPoint.geometry.coordinates[0]
                    }}
                    onCloseClick={() => {
                        setSelectedPoint(null);
                    }}
                >
                    <span>
                        <b>{selectedPoint.properties.Name}</b>
                        <ul>{selectedPoint.properties.Description}</ul>
                    </span>
                </InfoWindow>
            )}

            {/* 2nd Hand Goods */}
            <KmlLayer
                url="https://geo.data.gov.sg/secondhandcollecn/2017/11/30/kml/secondhandcollecn.kml"
                options={{ preserveViewport: true }}
            />
        </GoogleMap>
    </div>
}