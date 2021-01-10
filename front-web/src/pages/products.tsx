import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

import Navbar from "../components/Navbar"
import OrderSteps from "../components/OrderSteps"
import ProductsList from "../components/ProductsList"
import OrderLocation from "../components/OrderLocation"
import OrderSumary from "../components/OrderSumary"
import Footer from "../components/Footer"

import OrderContextProvider from "../context/OrderContext"
import api from "../services/api"

import 'react-toastify/dist/ReactToastify.min.css'

export interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  imageUri: string
}

export default function Products () {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])
  
  return (
    <OrderContextProvider>
      <ToastContainer />
      <Navbar />
      <OrderSteps />
      <ProductsList products={products} />
      <OrderLocation />
      <OrderSumary />
      <Footer />
    </OrderContextProvider> 
  )
}