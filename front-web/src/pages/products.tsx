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

interface Props {
  products: Product[]
}

export default function Products ({ products }: Props) {
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

export const getStaticProps = async () => {
  const response = await api.get('/products')
  const products = response.data
  
  return {
    props: {
      products
    },
    revalidate: 60 * 25
  }
}