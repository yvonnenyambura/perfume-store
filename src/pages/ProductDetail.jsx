import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

function ProductDetail() {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))

    if (!product) {
        return (
            <>
            <h1>Product not found</h1>
            <Link to="/">Back to Products</Link>
            </>
        )
    }
    return (
        <>
        <h1>{product.name}</h1>
        <p>{product.brand}</p>
        <p>Price: KES {product.price.toLocaleString()}</p>
        <p>{product.description}</p>
        <p>Notes: {product.notes}</p>
        <Link to="/shop">Back to Shop</Link>
        </>
    )
}

export default ProductDetail