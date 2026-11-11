import {Link} from 'react-router-dom'

function ProductCard({product}) {
return (
    <Link to={`/product/${product.id}`}>
    <div className="overflow-hidden rounded-lg bg-sand">
         <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />

        <div className="p-4">
                    <p className="text-xs uppercase tracking-widest text-ink/60">{product.brand}</p>
                    <h3 className="font-serif text-xl text-burgundy">{product.name}</h3>
                    <p className="mt-1 text-sm text-ink">KES {product.price.toLocaleString()}</p>
                </div>
    </div>
    </Link>
)
}

export default ProductCard