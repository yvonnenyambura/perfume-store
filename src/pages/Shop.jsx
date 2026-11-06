import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

function Shop() {
    const [search, setSearch] = useState("")
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <h1>This is the Shop Page</h1>
            <input type="text" placeholder="Search perfumes" value={search} onChange={(e) => setSearch(e.target.value)} />
            <p>{search && `Results for "${search}"`}</p>
            {filteredProducts.length === 0 && <p>No perfumes found</p>}
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </>
    )
}

export default Shop