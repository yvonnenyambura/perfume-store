import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {SlidersHorizontal, X} from 'lucide-react'

const categories = ["Women", "Men", "Unisex"]
const scents = ["Floral", "Woody", "Fruity", "Amber"]
const prices = [
    {value: "under12", label:"Under 12,000"},
    {value: "12-20", label:"Under 12,000 to 20,000"},
    {value: "over20", label:"Over 20,000"}
]


function Shop() {
    const [searchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get("search") || "")
    const [genderFilter, setGenderFilter] = useState(searchParams.get("gender") || "")
    const [scentFilter, setScentFilter] = useState(searchParams.get("scent") || "")
    const [priceFilter, setPriceFilter] = useState("")
    const [sort, setSort] = useState("featured")
    const [showFilters, setShowFilters] = useState(false)

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

     // Copy the list before sorting, so the original order is never changed
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if(sort === "low") return a.price - b.price 
        if(sort === "high") return b.price - a.price 
        if(sort === "az") return a.name.localeCompare(b.name)
            return 0 // featured keeps the original order

    })

    function clearFilters() {
        setGenderFilter("")
        setScentFilter("")
        setPriceFilter("")
    }


     // One checkbox row. Clicking a ticked box un-ticks it.
    function CheckRow({ label, checked, onToggle }) {
        return (
            <label className="flex cursor-pointer items-center gap-3 py-1.5 text-base text-ink">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
                    className="h-5 w-5 cursor-pointer accent-burgundy"
                />
                {label}
            </label>
        )
    }

    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-7xl px-6 py-8">

                {/* Top row: Filters button, search bar, Sort */}
                <div className="flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-4">
                    <button
                        type="button"
                        onClick={() => setShowFilters(true)}
                        className="flex shrink-0 items-center gap-2 rounded-full border border-burgundy px-5 py-2.5 text-sm font-medium text-burgundy transition hover:bg-burgundy hover:text-cream"
                    >
                        <SlidersHorizontal size={18} />
                        Filters
                    </button>

                    <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-gold/50 bg-[#FFFAF2] px-5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="shrink-0 text-burgundy" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M20 20l-4-4" />
                        </svg>
                        <label htmlFor="shop-search" className="sr-only">Search perfumes or brands</label>
                        <input
                            id="shop-search"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search perfumes or brands"
                            className="w-full min-w-0 bg-transparent py-2.5 text-sm outline-none"
                        />
                    </div>

                    <div className="w-full md:w-auto">
                        <label htmlFor="shop-sort" className="sr-only">Sort by</label>
                        <select
                            id="shop-sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="w-full rounded-full border border-burgundy bg-transparent px-5 py-2.5 text-sm text-burgundy outline-none md:w-auto"
                        >
                            <option value="featured">Sort by: Featured</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                            <option value="az">Name: A to Z</option>
                        </select>
                    </div>
                </div>


                {sortedProducts.length === 0 && (
                    <p className="py-16 text-center text-ink/70">
                        No perfumes found. Try a different search or filter.
                    </p>
                )}

                {/* Grid: 2 on phones, 3 on tablets, 4 on laptops */}
                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Dimmed page behind the panel. Click it to close. */}
            <div
                onClick={() => setShowFilters(false)}
                className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
                    showFilters ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            {/* Filters panel: slides in from the left */}
            <aside
                role="dialog"
                aria-label="Filters"
                aria-hidden={!showFilters}
                className={`fixed inset-y-0 left-0 z-[70] flex w-[88%] max-w-sm flex-col border-r border-gold bg-cream shadow-2xl transition-all duration-300 ${
                    showFilters ? "visible translate-x-0" : "invisible -translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-6 pb-4 pt-6">
                    <h2 className="font-serif text-4xl text-burgundy">Filters</h2>
                    <button
                        type="button"
                        onClick={() => setShowFilters(false)}
                        aria-label="Close filters"
                        className="text-burgundy"
                    >
                        <X size={28} />
                    </button>
                </div>
                <span className="mx-6 block h-px bg-gold/70" />

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <h3 className="font-serif text-2xl text-burgundy">Category</h3>
                    <span className="mb-2 block h-px w-12 bg-gold" />
                    {categories.map((c) => (
                        <CheckRow
                            key={c}
                            label={c}
                            checked={genderFilter === c}
                            onToggle={() => setGenderFilter(genderFilter === c ? "" : c)}
                        />
                    ))}

                    <h3 className="mt-6 font-serif text-2xl text-burgundy">Scent</h3>
                    <span className="mb-2 block h-px w-12 bg-gold" />
                    {scents.map((s) => (
                        <CheckRow
                            key={s}
                            label={s}
                            checked={scentFilter === s}
                            onToggle={() => setScentFilter(scentFilter === s ? "" : s)}
                        />
                    ))}

                    <h3 className="mt-6 font-serif text-2xl text-burgundy">Price</h3>
                    <span className="mb-2 block h-px w-12 bg-gold" />
                    {prices.map((p) => (
                        <CheckRow
                            key={p.value}
                            label={p.label}
                            checked={priceFilter === p.value}
                            onToggle={() => setPriceFilter(priceFilter === p.value ? "" : p.value)}
                        />
                    ))}
                </div>

                <div className="border-t border-gold/50 px-6 py-5">
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="mb-4 text-base text-burgundy underline underline-offset-4"
                    >
                        Clear all
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowFilters(false)}
                        className="w-full rounded-xl bg-burgundy py-3.5 text-base font-medium text-cream transition hover:bg-burgundy-dark"
                    >
                        Show results
                    </button>
                </div>
            </aside>
        </section>
    )
}

export default Shop