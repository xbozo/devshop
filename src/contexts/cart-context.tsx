'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type CartItem = {
  productId: number
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((currentState) => {
      const productInCart = currentState.some(
        (item) => item.productId === productId,
      )

      if (productInCart) {
        return cartItems.map((cartItem) => {
          if (cartItem.productId === productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          } else {
            return cartItem
          }
        })
      } else {
        return [...cartItems, { productId, quantity: 1 }]
      }
    })
  }

  const CartProviderValue = {
    items: cartItems,
    addToCart,
  }

  return (
    <CartContext.Provider value={CartProviderValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
