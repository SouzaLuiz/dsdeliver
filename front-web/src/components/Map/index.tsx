import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

interface Props {
  address: string
  position: {
    lat: number
    lng: number
  }
}
const Map: React.FC<Props> = ({position, address}) => {
  return (    
    <MapContainer center={position} zoom={14} scrollWheelZoom
      style={{height: '100%', width: '100%'}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      <Marker position={position} draggable>
        <Popup>
          <span style={{fontSize: '1.2rem'}}>{address}</span>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map