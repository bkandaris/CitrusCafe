import React, { useState } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import styled from 'styled-components';

const ReviewSlider = () => {
    const [slider, setSlider ] = useState(0);

    const Reviews = [
        {
            Review: "This place was great!",
            Name: "John Doe"
        },
        {
            Review: "This place was Fantastic!",
            Name: "Jane Doe"
        },
        {
            Review: "This place was Awesome!",
            Name: "Jake Doe"
        },
    ]

    setTimeout(()=> {
        if (slider <= 1) {
            setSlider(slider + 1);
        } else {
            setSlider(0)
        }
        console.log(slider)
    }, 10000)

    return (
        <div>
            <h3>What People Say</h3>
            <div>
                <FormatQuoteIcon />
                <p>{Reviews[slider].Review}</p>
                <FormatQuoteIcon />
            </div>
            <div>
                <div></div>
                <div></div>
                <p>{Reviews[slider].Name}</p>
            </div>
            <div>
                <div>Circle</div>
                <div>Circle</div>
                <div>Circle</div>
            </div>
        </div>
    )
}

export default ReviewSlider;