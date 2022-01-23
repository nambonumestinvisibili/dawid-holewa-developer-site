import React from 'react'
import styled from 'styled-components'
import Separator from '../../components/Separator/Separator'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import TechCarousel from './TechCarousel/TechCarousel'

const StyledTechStackPage = styled.div`
    height: 1000px;
    z-index: 4;
    background-color: green;
`

const TechStackPage = () => {
    return (
        <StyledTechStackPage>
            <Title>
                Technology <YellowElement>stack</YellowElement>
            </Title>
            <Separator />
            {/* <TechCarousel /> */}
        </StyledTechStackPage>
    )
}

export default TechStackPage
