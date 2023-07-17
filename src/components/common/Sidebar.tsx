import React from 'react'
import './Sidebar.css'
import navbarItems from './NavbarItems'
import { Link } from 'react-router-dom'

const Sidebar = ({ isopen, toggle }) => {
    const opacityClasses = ['sidebar-container']
    if (isopen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }

    return <div
        className={opacityClasses.join(' ')}
        isopen={isopen.toString()}
        onClick={toggle}>
        <div className="icon">
            <FaTimes className="close-icon" onClick={toggle} />
        </div>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                {navbarItems.map((item, index) => (
                    <Link to={item.link} key={index} className="sidebar-links">
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    </div>
}

export default Sidebar
