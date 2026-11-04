import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'


function Cart() {
    const { cart, setCart } = useContext(CartContext)

    function handlesRemove(index) {
        setCart(cart.filter((item, i) => i !== index))

    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    function handleIncrease(index) {
        setCart(cart.map((item,i) => i === index ? {...item, quantity: item.quantity + 1} : item))
    }
     function handleDecrease(index) {
        setCart(cart.map((item,i) => i === index ? {...item, quantity: Math.max(1, item.quantity - 1)} : item))
    }

    if (cart.length === 0) {
        return (
            <>
                <h1>Your cart is empty</h1>
                <Link to="/shop">Shop</Link>
            </>
        )
    }
    return (
        <>
            <h1>This is the Cart Page</h1>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: KES {(item.price * item.quantity).toLocaleString()}</p>
                    <button onClick={() => handlesRemove(index)}>Remove</button>
                    <button onClick={() => handleIncrease(index)}>+</button>
                    <button onClick={() => handleDecrease(index)}>-</button>
                </div>
            ))}

            <h3>Total: KES {total.toLocaleString()}</h3>
            <Link to="/checkoutpage">Proceed to Checkout</Link>
        </>
    )
}

export default Cart