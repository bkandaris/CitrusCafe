import React from 'react';
import styled from 'styled-components'

const About = () => {
    return (
        <Wrapper>
            <HeaderImg src={"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} alt="food pic" />

            <section>
                <h3>About Us</h3>
                <span></span>
                <p>At Citrus Cafe you will enjoy our great family atmosphere while you eat your freshly made meal. Our family friendly restaurant combines great food with good fun to give your family the outing you all need. We have several...</p>
                <button>Read More</button>
            </section>

            <section>
                <div>
                    <h3>Title</h3>
                    <p>Here is some information about some random title. It is undetermined but I know this content is going to be fire no doubt! Looking at all this food makes me perpetually hungry!</p>
                    <button>VIEW MENU</button>
                </div>
                <img src={"https://images.unsplash.com/photo-1486665384220-2f049536378a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"} alt="more food"/>
            </section>
            <span></span>
            <section>
                <img src={"https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"} alt="cutting board and food"/>
                <div>
                    <h3>Title</h3>
                    <p>Some more amazing content that will blow your socks off. This website is going to be straight fire homie. All of these food pics will drive sales up!</p>
                    <button>View Menu</button>
                </div>
            </section>
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`

const HeaderImg = styled.img`
    height: auto;
    width: 100%;
`