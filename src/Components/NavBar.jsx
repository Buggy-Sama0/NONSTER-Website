

import './navBar.css'
import {Link} from 'react-router-dom'
import cart from '../Components/assets/cart-icon.jpg'

function NavBar() {

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <h1>NONSTER</h1>
            </div>

            <ul className='nav-menu'>
                <li><Link style={{textDecoration:'none', color:'grey'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'grey'}} to='/product'>Products</Link></li>                
            </ul>

            <div className='nav-cart'>
                <Link to='/cart'><img src={cart}></img></Link>
                <div className='nav-cart-count'>0</div>
            </div>

        </div>
    )


}

export default NavBar