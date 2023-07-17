import React from 'react'
import './Navbar.css'
import navbarItems from './NavbarItems'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import ChangeThemeIcon from './ChangeThemeIcon'

interface NavbarProps {
    toggle: () => void;
}

export function Navbar (props: NavbarProps) {
    return <nav>
        <Link to="/" className="link">
          Name
        </Link>
        <div className="menu-items">
            {navbarItems.map((item, index) => (
                <Link className="link" to={item.link} key={index}>
                    {item.title}
                </Link>
            ))}
        </div>
        <div className="icons">
            <div>
                <ChangeThemeIcon/>
            </div>
            <div className="mobile-menu-icon">
                <FaBars onClick={props.toggle} />
            </div>
        </div>
    </nav>
}

export default Navbar
