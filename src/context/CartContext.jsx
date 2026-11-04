import { createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart") 
    return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value ={{cart , setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider