import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
            <h3>Natural Made</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/cuencos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cuencos</NavLink>
                <NavLink to={'/category/tablas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablas</NavLink>
                <NavLink to={'/category/platos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Platos</NavLink>
                
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar