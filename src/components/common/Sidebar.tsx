import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {navbarItems} from './NavbarItems'

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
        <div className="icon-sidebar">
            <FaTimes className="close-icon" onClick={toggle} />
        </div>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                {navbarItems.map((item, index) => (
                    <Link to={item.link} key={index} className="sidebar-links">
                        <p style={{fontStyle: 'bold'}}>
                            {item.icon} {item.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
}

export default Sidebar
