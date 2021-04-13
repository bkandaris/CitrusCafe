import React from 'react';
import styled from 'styled-components';
import CitrusLogo from '../Assets/CitrusLogo.svg';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <Wrapper>
            <SecondaryWrapper>
                <TopFooter>
                    <img src={CitrusLogo} alt={"Citrus Logo"} />
                    <FacebookIcon style={{ color: "white" }} />
                </TopFooter>
                <MiddleFooter>
                    <div>
                        links
                    </div>
                    <div>
                        address
                    </div>
                </MiddleFooter>
                <BottomFooter>
                    <div>
                        Hours
                    </div>
                    <div>
                        Ilyris Media
                    </div>
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
`
