import React from 'react';
import CitrusLogo from '../Assets/CitrusLogo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <img src={CitrusLogo} alt={"Citrus Logo"} />
            <div>
                <a><PhoneIcon />(608) 754-9006</a>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/menus">Menus</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;