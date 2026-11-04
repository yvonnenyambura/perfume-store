import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { CartContext } from '../context/CartContext'


function ProductDetail() {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))
    const { cart, setCart } = useContext(CartContext)

    function handleAddToCart() {
     const existingItem = cart.find((item) => item.id === product.id) 
     
     if (existingItem) {
        setCart(cart.map((item) =>
        item.id === product.id ? {... item,quantity: item.quantity + 1} : item))
     }else {
        setCart([...cart, {...product, quantity: 1}])
     }
    }


    if (!product) {
        return (
            <>
                <h1>Product not found</h1>
                <Link to="/shop">Back to Shop</Link>
            </>
        )
    }

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <>
            <img src={product.image} alt={product.name}></img>
            <h1>{product.name}</h1>
            <p>{product.brand}</p>
            <p>Price: KES {product.price.toLocaleString()}</p>
            <p>{product.description}</p>
            <p>Notes: {product.notes}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <p>Items in Cart: {itemCount}</p>

            <Link to="/shop">Back to Shop</Link>
        </>
    )
}

export default ProductDetail