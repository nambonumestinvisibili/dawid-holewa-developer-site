import React from 'react'
import styled from 'styled-components'
import { YellowColour } from '../../../components/responsiveness/ColourConstants'

const StyledCarouselItem = styled.div`
    width: 30vw;
    height: 20vw;
    background-color: ${YellowColour};
`

const CarouselItem = ({ name, image }) => {
    return (
        <StyledCarouselItem>
            { name }
        </StyledCarouselItem>
    )
}

export default CarouselItem
