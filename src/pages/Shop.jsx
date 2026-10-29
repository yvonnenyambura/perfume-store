import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Shop() {
    return(
        <>
        <h1>This is the Shop Page</h1>
        {products.map((product) => (
            <div key={product.id}>
            <ProductCard product={product} />
            </div>
    ))}
        </>
    )
}

export default Shop