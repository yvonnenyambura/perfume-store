import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'


function Shop() {
    const [search, setSearch] = useState("")
    const [genderFilter, setGenderFilter] = useState("")
    const [scentFilter, setScentFilter] = useState("")
    const [priceFilter, setPriceFilter] = useState("")

    const cleanSearch = search.trim().toLowerCase()

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(cleanSearch) ||
            product.brand.toLowerCase().includes(cleanSearch)
        const matchesGender = genderFilter === "" || product.gender === genderFilter
        const matchesScent =
            scentFilter === "" ||
            product.scentFamily.toLowerCase().includes(scentFilter.toLowerCase())
            const matchesPrice =
    priceFilter === "" ||
    (priceFilter === "under12" && product.price < 12000) ||
    (priceFilter === "12-20" && product.price >= 12000 && product.price <= 20000) ||
    (priceFilter === "over20" && product.price > 20000)
        return matchesSearch && matchesGender && matchesScent && matchesPrice
    })
    
    return (
        <>
            <h1>This is the Shop Page</h1>
            <input type="text" placeholder="Search perfumes" value={search} onChange={(e) => setSearch(e.target.value)} />
            <p>{search && `Results for "${search}"`}</p>
            <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Unisex">Unisex</option>
            </select>
            <select value={scentFilter} onChange={(e) => setScentFilter(e.target.value)}>
                <option value="">All Scents</option>
                <option value="Fruity">Fruity</option>
                <option value="Woody">Woody</option>
                <option value="Amber">Amber</option>
                <option value="Floral">Floral</option>
            </select>

            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                <option value="">All Prices</option>
                <option value="under12">Under 12,000</option>
                <option value="12-20">12,000 - 20,000</option>
                <option value="over20">Over 20,000</option>
            </select>
            {scentFilter && <p>Filtered by scent: {scentFilter}</p>}
            {genderFilter && <p>Filtered by gender: {genderFilter}</p>}
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