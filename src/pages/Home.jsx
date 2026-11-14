import {Link} from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Home() {

    // Get the first 3 products as featured products
    const featuredProducts = products.slice(0,3) 

    return (
        <>
 <section
    className="relative flex min-h-[480px] items-center bg-burgundy bg-cover bg-right-top md:min-h-[560px]"
    style={{ backgroundImage: "url('/images/hero.png')" }}
>
    {/* Dark fade on the left so the text stays readable */}
    <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/70 to-transparent lg:via-burgundy/40" />

    <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-xl text-cream">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">
                Welcome to Lulu Fragrances
            </p>
            <span className="mt-3 block h-px w-24 bg-gold" />
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
                Find the scent <br />
                
                that feels like you
            </h1>
            <p className="mt-6 text-lg text-cream/90">
                Timeless fragrances. Unforgettable you.
            </p>
            <Link
                to="/shop"
                className="mt-10 inline-block rounded-full bg-cream px-10 py-4 text-sm font-medium text-burgundy transition hover:bg-sand"
            >
                Shop Now
            </Link>
        </div>
    </div>
</section>

{/* Shop by category */}
<section className="bg-cream">
    <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="mb-8 flex items-center gap-6">
            <span className="h-px flex-1 bg-gold/60" />
            <h2 className="font-serif text-3xl text-burgundy md:text-4xl">Shop by Category</h2>
            <span className="h-px flex-1 bg-gold/60" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {["Women", "Men", "Unisex"].map((category) => (
                <Link
                    key={category}
                    to="/shop"
                    className="flex h-28 items-center justify-center rounded-2xl bg-sand font-serif text-3xl text-burgundy transition hover:bg-burgundy hover:text-cream md:h-32"
                >
                    {category}
                </Link>
            ))}
        </div>
    </div>
</section>

{/* Featured perfumes */}
            <section className="mx-auto max-w-7xl px-6 py-16 bg-cream">
                <h2 className="mb-10 text-center font-serif text-4xl text-burgundy">
                    Featured Perfumes
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    )            
}

export default Home