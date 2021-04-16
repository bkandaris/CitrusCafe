import React, { useState } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import styled from 'styled-components';

const ReviewSlider = () => {
    const [slider, setSlider ] = useState(0);

    const Reviews = [
        {
            Review: "A few years ago, i was exposed to the Nespresso Boutique coffee machine from my parents. My mom and dad has one that i was using at their house over the holidays.  I went out a week later to check it out and was impressed. Coffee shop is pretty upscale from what i am used to lol. Social distancing with the people made everyone feel safe, And the staff here work professionally. I gotta a free sleeve which was cool, cause i was all new to this place. I purchased a machine, and i use mine almost everyday to have my great coffee. Had a great experienced.",
            Name: "Michael K"
        },
        {
            Review: "Exceptional service. Very good social-distancing protocol, yet things move pretty quickly. I was given a free sleeve (not a promotion) because I didn't have any more cash on me, but wanted to try a specific flavor. Nespresso coffees are the best I've ever found for at-home making/drinking. And the luxurious shopping experience is really fun too.",
            Name: "David P."
        },
        {
            Review: "After years of using Nespresso at work, finally was gifted a original machine. Love it more then the bigger pods had been ordering online but decided to come into the store  today to see what else they may have that is nee. Small line that went quick to go inside. We were very lucky to get Jack as our sales associate. He recommended things that we would have never known we would enjoy. He even advised us how to brew each style, even iced, great tips! Jack was very knowledgeable and helpful. We were confident in purchasing more then we came in for with his suggestions. We will make sure and ask for him again next time we visit the store.",
            Name: "Candy M."
        },
    ]

    setTimeout(()=> {
        if (slider <= 1) {
            setSlider(slider + 1);
        } else {
            setSlider(0)
        }
        console.log(slider)
    }, 15000)

    return (
        <Wrapper>
            <SliderHeader>
                <h3>What People Say</h3>
                <HorizontalLine></HorizontalLine>
            </SliderHeader>
            <QuoteWrapper>
                <FormatQuoteIcon className="quote_icon rotate-180"
                />
                <CustomerQuote>{Reviews[slider].Review}</CustomerQuote>
                <FormatQuoteIcon
                className="quote_icon"
                 />
            </QuoteWrapper>
            <ReviewCircleWrapper>
                <ReviewerWrapper>
                    <HorizontalLine></HorizontalLine>
                    <VerticalGrey></VerticalGrey>
                    <Reviewer>{Reviews[slider].Name}</Reviewer>
                </ReviewerWrapper>
                <CircleWrapper>
                    <div className={ slider === 0 ? "circle_orange": "circle"}></div>
                    <div className={ slider === 1 ? "circle_orange": "circle"}></div>
                    <div className={ slider === 2 ? "circle_orange": "circle"}></div>
                </CircleWrapper>
            </ReviewCircleWrapper>
        </Wrapper>
    )
}

export default ReviewSlider;

const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    margin-top: 150px;
`

const HorizontalLine = styled.div`
    background-color: #F78B22;
    height: 4px;
    width: 100px;
    margin-left: 4%;
`
const SliderHeader = styled.div`
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

const QuoteWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const CustomerQuote = styled.p`
    padding: 2.5rem;
    font-size: 1.2rem;
`

const VerticalGrey = styled.div`
    height: 42px;
    width: 4px;
    background: grey;
    margin: 0 1.5rem;
`

const ReviewCircleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ReviewerWrapper = styled.div`
    width: 25%;
    margin-right: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CircleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`

const Reviewer = styled.p`
    font-size: 1.2rem;
`