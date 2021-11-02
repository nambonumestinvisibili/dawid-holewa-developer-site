import React from 'react'
import styled from 'styled-components'
import { leftMargin } from '../responsiveness/Utils'

const StyledTitle = styled.div`
    font-family: 'Archivo Black';
    font-size: 64px; 
    margin-top: 20vw;
    margin-left: ${leftMargin};
`

const Title = ( { children } ) => {
    return (
        <StyledTitle>
            { children }
        </StyledTitle>
    )
}

export default Title
