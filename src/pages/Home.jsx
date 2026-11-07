import {Link} from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Home() {

    // Get the first 3 products as featured products
    const featuredProducts = products.slice(0,3) 

    return(
        <>
        <div className="hero">
            <h1 className="text-3xl font-serif text-burgundy">Welcome to Lulu Fragrances</h1>
            <p>Your one-stop shop for all your fragrance needs.</p>
            <Link to="/shop" className="btn">Shop Now</Link>
        </div>
        <div className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Home