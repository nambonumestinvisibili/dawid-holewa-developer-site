import React from 'react'
import styled from 'styled-components'
import { BlackColour, YellowColour } from '../../../components/responsiveness/ColourConstants'

const StyledCarouselItem = styled.div`
    width: 30vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImage = styled.img`
    height: 10vw;
    width: auto;
`

const CarouselItem = ({ name, imageSrc }) => {
    return (
        <StyledCarouselItem>
            <StyledImage src={imageSrc} />
        </StyledCarouselItem>
    )
}

export default CarouselItem
