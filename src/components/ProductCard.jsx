import { Link } from 'react-router-dom'
import { Heart, Share2 } from 'lucide-react'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext.jsx'

function ProductCard({ product }) {
    const { cart, setCart } = useContext(CartContext)
    const [liked, setLiked] = useState(false)

    function addToCart() {
        const existing = cart.find((item) => item.id === product.id)
        if (existing) {
            setCart(cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gold/60 bg-burgundy shadow-md">

            {/* Photo, with the heart (top-right) and share (bottom-right) on it */}
            <div className="relative">
                <Link to={`/product/${product.id}`} className="group block overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </Link>

                <button
                    type="button"
                    onClick={() => setLiked(!liked)}
                    aria-pressed={liked}
                    aria-label={liked ? "Remove from favourites" : "Save to favourites"}
                    className={`absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full shadow transition sm:right-3 sm:top-3 sm:h-9 sm:w-9 ${
                        liked
                            ? "bg-burgundy text-cream ring-1 ring-cream/60"
                            : "bg-cream text-burgundy"
                    }`}
                >
                    <Heart size={18} fill={liked ? "currentColor" : "none"} />
                </button>

                <button
                    type="button"
                    aria-label="Share"
                    className="absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream text-burgundy shadow transition sm:bottom-3 sm:right-3 sm:h-9 sm:w-9"
                >
                    <Share2 size={18} />
                </button>
            </div>

            {/* Text: brand, name, price */}
            <Link to={`/product/${product.id}`} className="block flex-1 px-3 pt-3 text-center sm:px-4 sm:pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold-light">{product.brand}</p>
                <h3 className="mt-1 font-serif text-lg text-cream sm:text-xl md:text-2xl">{product.name}</h3>
                <p className="mt-2 text-sm font-semibold text-cream sm:text-base">
                    KES {product.price.toLocaleString()}
                </p>
            </Link>

            {/* Add to Cart: same space on the left and right */}
            <div className="p-3 sm:p-4">
                <button
                    type="button"
                    onClick={addToCart}
                    className="w-full rounded-lg bg-cream py-2.5 text-xs font-medium text-burgundy transition hover:bg-sand sm:text-sm"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard