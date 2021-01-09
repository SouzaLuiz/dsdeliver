import { createContext, useState } from "react"
import { Product } from "../pages/products"
import api from "../services/api"

interface OrderContextType {
  handleSelectProduct: (product: Product) => void
  checkIsSelected: (selectedProducts: Product[], product: Product) => boolean
  setOrderLocation: (location: OrderLocationData) => void
  createOrder: () => void
  selectedProducts: Product[]
  totalPrice: number
}

export interface OrderLocationData {
  latitude: number
  longitude: number
  address: string
}

export const OrderContext = createContext<OrderContextType>({} as OrderContextType)

const OrderContextProvider: React.FC = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = selectedProducts.some(item => item.id === product.id)
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id)
      setSelectedProducts(selected)
      setTotalPrice(prev => prev - product.price)
    } else {
      setSelectedProducts(previous => [...previous, product])
      setTotalPrice(prev => prev + product.price)
    }
  }

  const checkIsSelected = (selectedProducts: Product[], product: Product) => {
    return selectedProducts.some(item => item.id === product.id)
  }

  const createOrder = () => {
    const orderData = {
      address: orderLocation.address,
      latitude: orderLocation.latitude,
      longitude: orderLocation.longitude,
      products: selectedProducts.map(item => ({ id: item.id}))
    }

    api.post('/orders', orderData)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  return (
    <OrderContext.Provider 
      value={{
        handleSelectProduct, 
        setOrderLocation,
        selectedProducts, 
        checkIsSelected, 
        totalPrice,
        createOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider