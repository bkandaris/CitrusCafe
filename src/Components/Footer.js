import React from 'react';
import styled from 'styled-components';
import CitrusLogo from '../Assets/CitrusLogo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Wrapper>
            <SecondaryWrapper>
                <TopFooter>
                    <img src={CitrusLogo} alt={"Citrus Logo"} />
                </TopFooter>
                <MiddleFooter>
                    <LinkWrapper>
                        <Link className="footer_link" to="/">Home</Link>
                        <Link className="footer_link" to="/contact" >Contact</Link>
                        <Link className="footer_link" to="/menus">Menus</Link>
                        <Link className="footer_link" to="/about">About</Link>
                    </LinkWrapper>
                    <ContactWrapper>
                        <address className="footer_info">208 S. Main St, Janesville, WI</address>
                        <phone className="footer_info">Phone: 608-754-9006 </phone>
                        <email className="footer_info">Email: info@citruscafe208.com</email>
                    </ContactWrapper>
                </MiddleFooter>
                <BottomFooter>
                    <p>
                        Open Daily:   Monday 6AM - Sunday 3PM
                    </p>
                    <Developers>
                        Design and Development by: <span className="media">Ilyris Media</span>
                    </Developers>
                </BottomFooter>
            </SecondaryWrapper>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    margin-top: 100px;  
    background: #868686;
    color: white;
    height: 500px;
    width: 100%;
`

const SecondaryWrapper = styled.div`
    margin: 0 auto;
    width: 85%;
`

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    border-right: 4px solid white;
`

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`

const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const MiddleFooter = styled.div`
    height: 100px;
    margin: 2.5rem 0;
    display: flex;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
`

const BottomFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Developers = styled.p`
    font-size: .9rem;
    margin-top: 40px;
`