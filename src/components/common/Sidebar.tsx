import React from 'react'
import './Sidebar.css'
import navbarItems from './NavbarItems'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

export function Sidebar(props: SidebarProps) {

    const {isOpen, toggle} = props

    const opacityClasses = ['sidebar-container']
    if (isOpen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }

    return <div
        className={opacityClasses.join(' ')}
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
