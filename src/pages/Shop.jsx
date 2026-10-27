import products from '../data/products'

function Shop() {
    return(
        <>
        <h1>This is the Shop Page</h1>
        {products.map((product) => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
          <p>KES {product.price}</p>
            </div>
    ))}
        </>
    )
}

export default Shop