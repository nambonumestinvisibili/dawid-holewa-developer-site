import React from 'react'
import { BigScreen } from '../../components/responsiveness/Layout'
import styled from 'styled-components'
import { YellowColour } from '../../components/responsiveness/ColourConstants'
import { leftMargin } from '../../components/responsiveness/Utils'

const BigTitle = styled.div`
    font-family: 'Archivo Black';
    font-size: 144px;
    margin-top: 20vw;
    margin-left: ${leftMargin};
`

const SmallerTitle = styled.div`
    font-family: 'Archivo Black';
    font-size: 64px;
    margin-left: ${leftMargin};
`

const WelcomePage = () => {
    return (
        <>
            <BigTitle>
                Hello there!
            </ BigTitle>
            <SmallerTitle>
                I'm Dawid, a full-stack <span style={{color: YellowColour}}> developer </span>
            </SmallerTitle>
        </>
    )
}

export default WelcomePage
