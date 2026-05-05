import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import navData from '../../data/navData'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => { 

    return (
        <header className="navbar">
            <div className='logo'>
                <img src="/logo.png" alt="logo" />
            </div>

            <nav className="nav-links">
                {navData.map((item) => {
                    if (item.type === "link") {
                        return (
                            <NavLink 
                                key={item.path} 
                                to={item.path}
                            >
                                {item.label}
                            </NavLink>
                        )
                    }

                    if (item.type === "dropdown") {
                        return (
                            <Dropdown
                                key={item.title}
                                title={item.title}
                                items={item.items}
                                mobile={false}
                            />
                        )
                    }

                    return null
                })}
            </nav>

            <div className="nav-btn">
                <button>Visit Forest</button>
            </div>
        </header>
    )
}

export default Navbar