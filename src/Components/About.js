import { ButtonGroup } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'

const About = () => {
    return (
        <Wrapper>
            <HeaderImg src={"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} alt="food pic" />
            <SecondaryWrapper>
                <Section1>
                    <AboutUsHeader>
                        <Header>About Us</Header>
                        <HorizontalLine></HorizontalLine>
                    </AboutUsHeader>
                    <Paragraphs>At Citrus Cafe you will enjoy our great family atmosphere while you eat your freshly made meal. Our family friendly restaurant combines great food with good fun to give your family the outing you all need. We have several...</Paragraphs>
                    <Button>Read More</Button>
                </Section1>

                <Section2>
                    <S2left>
                        <Header>Title</Header>
                        <Paragraphs>Here is some information about some random title. It is undetermined but I know this content is going to be fire no doubt! Looking at all this food makes me perpetually hungry!</Paragraphs>
                        <Button>VIEW MENU</Button>
                    </S2left>
                    <S2Img src={"https://images.unsplash.com/photo-1486665384220-2f049536378a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"} alt="more food"/>
                </Section2>
                <span></span>
                <section>
                    <img src={"https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"} alt="cutting board and food"/>
                    <div>
                        <Header>Title</Header>
                        <Paragraphs>Some more amazing content that will blow your socks off. This website is going to be straight fire homie. All of these food pics will drive sales up!</Paragraphs>
                        <Button>View Menu</Button>
                    </div>
                </section>
            </SecondaryWrapper>
        </Wrapper>
    )
}

export default About;
// Main and Secondary Wrapper
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`
const SecondaryWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
`
// Images
const HeaderImg = styled.img`
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
`

const Header = styled.h3`
    font-weight: 700;
    margin: 1rem 0;
`

const Paragraphs = styled.p`
    font-weight: 400;
`

const Button = styled.button`
    background: black;
    border: none;
    color: white;
    height: 48px;
    width: 144px;
    box-shadow: 5px 5px white, 5px 5px 0 1.5px black;
    margin: 1rem 0;
`

const Section1 = styled.div`
    padding: 0;
    margin-top: 1.5rem;
`

const Section2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const S2left = styled.div`
    width: 49%;
`

const S2Img = styled.img`
    max-width: 450px;

`


const HorizontalLine = styled.div`
    background-color: #F78B22;
    height: 2px;
    width: 100px;
    margin-left: 4%;
`

const AboutUsHeader = styled.div`
    display: flex;
    align-items: center;
`