import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

const StyledStackItem = styled.div`
    border-radius: 15px;
    padding: 10px;
    margin: 3px 3px;
    font-size: calc(10px + 0.5vw);
    background-color: ${COLORS.black_70};
`

const ProjectStackItem = ({ name }) => {
    return (
        <StyledStackItem>
            { name }
        </StyledStackItem>
    )
}

export default ProjectStackItem
