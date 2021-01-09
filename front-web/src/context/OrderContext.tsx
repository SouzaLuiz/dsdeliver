import { createContext, useState } from "react"
import { Product } from "../pages/products"

interface OrderContextType {
  handleSelectProduct: (product: Product) => void
  checkIsSelected: (selectedProducts: Product[], product: Product) => boolean
  setOrderLocation: (location: OrderLocationData) => void
  showData: () => void
  selectedProducts: Product[]
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

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = selectedProducts.some(item => item.id === product.id)
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id)
      setSelectedProducts(selected)
    } else {
      setSelectedProducts(previous => [...previous, product])
    }
  }

  const checkIsSelected = (selectedProducts: Product[], product: Product) => {
    return selectedProducts.some(item => item.id === product.id)
  }

  const showData = () => {
    console.log(selectedProducts)
    console.log(orderLocation)
  }

  return (
    <OrderContext.Provider 
      value={{handleSelectProduct, selectedProducts, checkIsSelected, setOrderLocation, showData}}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider