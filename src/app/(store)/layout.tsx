import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { Metadata } from 'next'
import { ReactNode } from 'react'

type StoreLayoutProps = {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
        {/* mesmo que CartProvider seja um client-component, o children ainda pode ser um server-component */}
      </div>
    </CartProvider>
  )
}
