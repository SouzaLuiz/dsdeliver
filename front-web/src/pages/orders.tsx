import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import StepsHeader from "../components/StepsHeader";
import OrderLocation from "../components/OrderLocation";

export interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  imageUri: string
}

export interface OrderLocationData {
  latitude: number
  longitude: number
  address: string
}

export default function Orders () {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <Navbar />
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </> 
  )
}