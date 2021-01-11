import dynamic from 'next/dynamic'
import { useContext, useEffect, useState } from 'react'

import { OrderContext } from '../../context/OrderContext'
import SearchBar from '../SearchBar'

import styles from './order-location.module.css'

const initialPosition = {
  lat: -2.9916052,
  lng: -60.0428671
}

export interface Place {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

const Map = dynamic(
  () => import('../Map'),
  { ssr: false }
)

const OrderLocation = () => {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const { setOrderLocation  } = useContext(OrderContext)

  useEffect(() => {
    setOrderLocation({
      latitude: address.position.lat,
      longitude: address.position.lng,
      address: address.label
    })
  },[])
  
  const handleChangeSelect = (place: Place) => {
    setAddress(place)
    
    setOrderLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label
    })
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Selecione onde o pedido deve ser entregue:
      </h3>      
      
      <div className={styles['map-wrapper']}>        
        <SearchBar handleChangeSelect={handleChangeSelect}/>

        <Map 
          position={address.position} 
          address={address.label}
        />
      </div>
    </div>
  )
}

export default OrderLocation