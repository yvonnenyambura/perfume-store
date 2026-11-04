import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext.jsx'
import {useNavigate, Link} from 'react-router-dom'

function CheckOutPage() {
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    const [formData, setFormData] = useState({ name: "", phone: "", address: "" })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData, cart)
        navigate("/order-confirmation", {state: { formData, cart, total } })
        setCart([])
    }

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
            <h1>This is the Checkout Page</h1>

            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: KES {(item.price * item.quantity).toLocaleString()}</p>
                </div>
            ))}

            <h3>Total: KES {total.toLocaleString()}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <button type="submit">Place Order</button>
            </form>
        </>
    )
}  

export default CheckOutPage