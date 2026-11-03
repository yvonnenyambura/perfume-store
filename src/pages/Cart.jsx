import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'


function Cart() {
    const { cart, setCart } = useContext(CartContext)

    function handlesRemove(index) {
        setCart(cart.filter((item, i) => i !== index))

    }
    const total = cart.reduce((sum, item) => sum + item.price, 0)

    if (cart.length === 0) {
        return (
            <>
                <h1>Your cart is empty</h1>
                <Link to="/shop">Continue Shopping</Link>
            </>
        )
    }
    return (
        <>
            <h1>This is the Cart Page</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>Price: KES {item.price.toLocaleString()}</p>
                    <button onClick={() => handlesRemove(index)}>Remove</button>
                </div>
            ))}

            <h3>Total: KES {total.toLocaleString()}</h3>
            <Link to="/checkoutpage">Proceed to Checkout</Link>
        </>
    )
}

export default Cart