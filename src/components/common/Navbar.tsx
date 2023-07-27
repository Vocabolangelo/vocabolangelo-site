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
            <p style={{fontSize: '1.5em', fontStyle: 'bold'}}>
                 Vocabolangelo
            </p>
        </Link>
        <div className="menu-items">
            {navbarItems.map((item, index) => (
                <Link className="link" to={item.link} key={index}>
                    <div className="actions stacked">
                        <p style={{fontStyle: 'bold'}}>
                            {item.icon} {item.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        <div className="icons-navbar">
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
