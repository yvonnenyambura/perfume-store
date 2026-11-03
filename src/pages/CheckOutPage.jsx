import {useContext} from 'react'
import { CartContext } from '../context/CartContext.jsx'

function CheckOutPage() {
    const { cart } = useContext(CartContext)

    const total = cart.reduce((sum, item) => sum + item.price, 0)
    return (
        <>
            <h1>This is the Checkout Page</h1>

            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>Price: KES {item.price.toLocaleString()}</p>
                </div>
            ))}

            <h3>Total: KES {total.toLocaleString()}</h3>
        </>
    )
}  

export default CheckOutPage