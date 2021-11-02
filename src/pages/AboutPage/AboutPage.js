import React from 'react'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import Text from '../../components/Text/Text'
import styled from 'styled-components'

const AboutText = styled(Text)`
    margin-top: 3vw;
    width: 15vw;
`
const AboutPage = () => {
    return (
        <>
            <Title>
                Get to know me <YellowElement> better! </ YellowElement>
            </Title>
            <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat, turpis et pharetra commodo, metus elit dignissim nulla, pulvinar tincidunt neque leo vel ipsum. Mauris iaculis ut lacus dignissim interdum. Phasellus eu nulla non felis congue vehicula sed quis lacus. Vivamus quis blandit eros. Maecenas ac odio eros. Sed viverra turpis ut arcu pharetra volutpat. Suspendisse convallis felis nec leo lobortis auctor. Integer condimentum semper nunc, vitae porta lorem condimentum quis. Curabitur sollicitudin sapien sed vestibulum faucibus. Nunc in lectus congue, sodales magna et, aliquet metus. Duis ut nisi sit amet diam maximus pretium nec quis sem.
            </AboutText>
        </>
    )
}

export default AboutPage
