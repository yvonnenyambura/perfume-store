import {useLocation, Link} from 'react-router-dom'

function OrderConfirmation() {
    const {formData, cart, total} = useLocation().state || {}

    if(!formData || !cart || !total) {
        return (
            <>
                <h1>No order found</h1>
                <Link to="/shop">Go back to Shop</Link>
                </>
        )
    }

    return (
        <>
        <h1>Order Confirmation</h1>
        <p>Thank you for your order, {formData.name}!</p>
        <p>We will contact you at {formData.phone} and deliver to {formData.address}.</p>
        <h2>Order Summary</h2>
        {cart.map((item, index) => (
            <div key={index}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: KES {(item.price * item.quantity).toLocaleString()}</p>
            </div>
            
        ))}
        

        <h3>Total: KES {total.toLocaleString()}</h3>
        <Link to="/shop">Continue Shopping</Link>
        </>
    )
    
}

export default OrderConfirmation