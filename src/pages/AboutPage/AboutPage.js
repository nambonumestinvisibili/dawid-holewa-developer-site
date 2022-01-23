import React from 'react'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import Text from '../../components/Text/Text'
import styled from 'styled-components'
import { ANCHORS } from '../../constants/anchors'

const AboutText = styled(Text)`
    margin-top: 3vw;
    width: 15vw;
`
const AboutPage = () => {
    return (
        <>
            <Title id={ANCHORS.ABOUT}>
                Get to know me <YellowElement> better! </ YellowElement>
            </Title>
            <AboutText>
                Dedicated and efficient developer who has an eye for elegant and high-performance solutions. <br/> 
                A fast learner and self-development possibilities seeker.
                After hours a snowboarder, music-lover and a traveler who enjoys spending time with his friends and family
            </AboutText>
        </>
    )
}

export default AboutPage
