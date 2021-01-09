import axios from 'axios'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import AsyncSelect from 'react-select/async'
import { OrderLocationData } from '../../pages/products'

import styles from './order-location.module.css'

const initialPosition = {
  lat: -2.9916052,
  lng: -60.0428671
}

interface Place {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

interface Props {
  onChangeLocation: (location: OrderLocationData) => void
}

function fetchLocalMapBox (local: string) {
  const mapboxToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}


const OrderLocation: React.FC<Props> = ({ onChangeLocation }) => {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const Map = dynamic(
    () => import('../Map'),
    { ssr: false }
  )

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue)

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      })
    })

    callback(places)
  }
  
  const handleChangeSelect = (place: Place) => {
    setAddress(place)
    
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    })
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Selecione onde o pedido deve ser entregue:
      </h3>

      <div className={styles['filter-wrapper']}>
        <AsyncSelect
          placeholder="Digite um endereço para entregar o pedido"
          className={styles.filter}
          loadOptions={loadOptions}
          onChange={value => handleChangeSelect(value)}
        />
      </div>
      
      <div className={styles['map-wrapper']}>
        <Map 
          position={address.position} 
          address={address.label}
        />
      </div>
    </div>
  )
}

export default OrderLocation