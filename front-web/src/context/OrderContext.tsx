import { createContext, useState } from "react"
import { toast } from "react-toastify"
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

  const notify = (number) => 
    toast.success(`Pedido realizado com sucesso N°${number}`, {
      style: {fontSize: 20}
    })

  const errorNotify = () => 
    toast.error('Erro ao realizar pedido tente novamente', {
      style: {fontSize: 20}
    })

  const warningNotify = (message: string) => 
    toast.warning(message, {
      style: {fontSize: 20}
    })

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

  const clearInformations = () => {
    const orderClear = {
      latitude: -2.9916052,
      longitude: -60.0428671,
      address: null
    }

    setSelectedProducts([])
    setTotalPrice(0)
    setOrderLocation(orderClear)
  }

  const createOrder = () => {
    if (selectedProducts.length === 0) {
      warningNotify('Selecione alguns produtos.')
      return
    }

    if (!orderLocation.address) {
      warningNotify('Insira o endereço de entrega.')
      return
    }

    const orderData = {
      address: orderLocation.address,
      latitude: orderLocation.latitude,
      longitude: orderLocation.longitude,
      products: selectedProducts.map(item => ({ id: item.id}))
    }

    api.post('/orders', orderData)
      .then(response => {
        notify(response.data.id)
        clearInformations()
      })
      .catch(errorNotify)
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