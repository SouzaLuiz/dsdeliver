import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import styles from './map.module.css'

interface Props {
  address: string
  position: {
    lat: number
    lng: number
  }
}

const Map: React.FC<Props> = ({position, address}) => {
  return (    
    <MapContainer 
      center={position} 
      zoom={14} 
      scrollWheelZoom
      className={styles.content}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      <Marker position={position} draggable>
        <Popup>
          <span className={styles.popup}>{address}</span>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map