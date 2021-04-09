import React from 'react';
import CitrusLogo from '../Assets/CitrusLogo.svg';
import PhoneIcon from '@material-ui/icons/Phone';

const Navbar = () => {
    return (
        <div>
            <img src={CitrusLogo} alt={"Citrus Logo"} />
            <div>
                <a><PhoneIcon /></a>
            </div>
        </div>
    )
}

export default Navbar;