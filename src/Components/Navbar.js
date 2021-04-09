import React from 'react';
import styled from 'styled-components'
import CitrusLogo from '../Assets/CitrusLogo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <Img src={CitrusLogo} alt={"Citrus Logo"} />
            <Div>
                <a><PhoneIcon />(608) 754-9006</a>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/menus">Menus</Link>
                    <Link to="/about">About</Link>
                </div>
            </Div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
`

const Img = styled.img`
    height: 100px;
`

const Div = styled.div`
    margin: 0 50px 0 0;
    
`

