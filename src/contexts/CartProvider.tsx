import { ReactNode, createContext, useState } from 'react'
import { CheckoutFormData } from '../pages/Checkout'
import { ProductProps } from '../utils/data/products'

interface CartItemProps extends Pick<ProductProps, 'id' | 'title' | 'image' | 'price'> {
  quantity: number
}

interface ItemQuantityProps {
  productId: number
  quantity: number
}

interface BillingProps {
  paymentMethod: CheckoutFormData['paymentMethod']
  fee: number
  subtotal: number
  total: number
}

type ShippingProps = Omit<CheckoutFormData, 'paymentMethod'>

interface OrderProps {
  orderId: number | null
  items: CartItemProps[]
  billing: BillingProps | null
  shipping: ShippingProps | null
}

interface CartContextProps {
  cart: CartItemProps[]
  cartTotalItems: number
  order: OrderProps | null
  fee: number
  subtotal: number
  total: number
  addToCart: (product: CartItemProps) => void
  removeFromCart: (productId: number) => void
  updateCart: ({ productId, quantity }: ItemQuantityProps) => void
  checkProductExistsInCart: (productId: number) => boolean
  createOrder: (data: OrderProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([])
  const [order, setOrder] = useState<OrderProps | null>(null)

  function addToCart(product: CartItemProps) {
    setCart((state) => [product, ...state])
  }

  function removeFromCart(productId: number) {
    const filteredCart = cart.filter((item) => item.id !== productId)

    setCart(filteredCart)
  }

  function updateCart({ productId, quantity }: ItemQuantityProps) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity }
      }

      return item
    })

    setCart(updatedCart)
  }

  function checkProductExistsInCart(productId: number) {
    const product = cart.findIndex((item) => item.id === productId)

    return product >= 0
  }

  function createOrder(data: OrderProps) {
    setOrder(data)
    setCart([])
  }

  const cartTotalItems = cart.length
  const fee = cartTotalItems > 0 ? 3.5 : 0
  const subtotal = cart.reduce((acc, item) => {
    acc += item.price * item.quantity

    return acc
  }, 0)
  const total = subtotal + fee

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalItems,
        order,
        fee,
        subtotal,
        total,
        addToCart,
        removeFromCart,
        updateCart,
        checkProductExistsInCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
