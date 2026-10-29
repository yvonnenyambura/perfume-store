import {Link} from 'react-router-dom'

function ProductCard({product}) {
return (
    <Link to={`/product/${product.id}`}>
    <div className="product-card">
        <h3>{product.name}</h3>
                <p>{product.brand}</p>
          <p>KES {product.price.toLocaleString()}</p>
    </div>
    </Link>
)
}

export default ProductCard