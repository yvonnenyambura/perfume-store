import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { CartContext } from '../context/CartContext'


function ProductDetail() {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))
    const { cart, setCart } = useContext(CartContext)

    function handleAddToCart() {
        setCart([...cart, product])
    }


    if (!product) {
        return (
            <>
                <h1>Product not found</h1>
                <Link to="/shop">Back to Shop</Link>
            </>
        )
    }
    return (
        <>
            <img src={product.image} alt={product.name}></img>
            <h1>{product.name}</h1>
            <p>{product.brand}</p>
            <p>Price: KES {product.price.toLocaleString()}</p>
            <p>{product.description}</p>
            <p>Notes: {product.notes}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <p>Items in Cart: {cart.length}</p>

            <Link to="/shop">Back to Shop</Link>
        </>
    )
}

export default ProductDetail