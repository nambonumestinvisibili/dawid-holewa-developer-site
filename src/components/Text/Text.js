import React from 'react'
import styled from 'styled-components'
import { leftMargin } from '../responsiveness/Utils'

const StyledText = styled.div`
    margin-left: ${leftMargin};
    font-family: 'Archivo';
    font-size: 30px;
`

const Text = ({ children }) => {
    return (
        <StyledText>
          { children }  
        </StyledText>
    )
}

export default Text
