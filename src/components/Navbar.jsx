import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div>
            <h2>Mali Fragrances</h2>
        </div>
        <div>
           <Link to="/cart">Cart</Link> 
        </div>
        </div>
    )
}

export default Navbar