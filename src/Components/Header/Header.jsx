import React, {useState} from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import menuIcon from "../../assets/images/menu.png";
const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header>
            <div className="header__wrapper">
                <Link className="header__link" to="/">
                <h1 className="header__title">Explore+City.</h1>
                </Link>
                <button className="header__btn" onClick={()=>setIsNavExpanded(!isNavExpanded)}>
                    <img className="header__icon" src={menuIcon} alt="menu icon"/>
                </button>
            </div>
            <nav className={isNavExpanded ? "nav" : "d-none"} style={{ maxHeight: isNavExpanded ? '200px' : '0' }}>
                <ul className="nav__container">
                    <li className="nav__li">
                        <Link className="nav__link" to="/">Home</Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/">About Us</Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/">Top Cities</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header