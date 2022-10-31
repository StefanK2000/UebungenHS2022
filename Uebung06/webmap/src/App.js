import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";


import { MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet'


const KKWCircle = {color: 'blue', weight: 0, fill:true, fillOpacity: 0.2}


function App() {

    React.useEffect(() => {
      const L = require("leaflet");

      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });
    }, []);

    var swisstopo = (<TileLayer url="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
    attribution='&copy; swisstopo'/>);


  return (
    <MapContainer center={[46.860256533, 8.284499343]} zoom={8} scrollWheelZoom={true}>

    {swisstopo}

    <Marker position={[47.601449945, 8.182827905]}>
      <Popup>
        Kernkraftwerk Leibstadt<br/>
      </Popup>
      <Circle center={[47.601449945, 8.182827905]} pathOptions={KKWCircle} radius={50000}/>
    </Marker>

    <Marker position={[47.552027591, 8.228382505]}>
      <Popup>
        Kernkraftwerk Beznau<br/>
      </Popup>
      <Circle center={[47.552027591, 8.228382505]} pathOptions={KKWCircle} radius={50000}/>
    </Marker>

    <Marker position={[47.366081001, 7.966741544]}>
      <Popup>
        Kernkraftwerk Gösgen<br/>
      </Popup>
      <Circle center={[47.366081001, 7.966741544]} pathOptions={KKWCircle} radius={50000}/>
    </Marker>

    <Marker position={[46.968869175, 7.268042413]}>
      <Popup>
        Kernkraftwerk Mühleberg<br/>
      </Popup>
      <Circle center={[46.968869175, 7.268042413]} pathOptions={KKWCircle} radius={50000}/>
    </Marker>

  </MapContainer>
    );
  }

  export default App;