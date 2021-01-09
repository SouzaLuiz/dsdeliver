import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import OrderSteps from "../components/OrderSteps"
import ProductsList from "../components/ProductsList"
import OrderLocation from "../components/OrderLocation"

import OrderSumary from "../components/OrderSumary"
import Footer from "../components/Footer"

import api from "../services/api"

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

export default function Products () {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }
  
  return (
    <>
      <Navbar />
      <OrderSteps />
      <ProductsList
        products={products} 
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
      <OrderLocation 
        onChangeLocation={location => setOrderLocation(location)} 
      />
      <OrderSumary />
      <Footer />
    </> 
  )
}