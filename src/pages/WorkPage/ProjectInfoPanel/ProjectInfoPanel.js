import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import ProjectStackItem from './ProjectStackItem'

const StyledProjectInfoPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    z-index: 1;
    top: calc(180px + 0.5vw);
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${COLORS.white_70};
    position: absolute;
    visibility: ${ ({ visible }) => visible ? 'visible' : 'hidden'};
    padding: 1vw 3vw;
`
const StyledSubInfo = styled.div`
    padding: 1vw 0 3vw 0;
    font-size: calc(12px + 2vw);
`

const ProjectStack = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ProjectInfoPanel = ({ visible, subInfo }) => {
    return (
        <StyledProjectInfoPanel visible={visible} >
            <StyledSubInfo>
                {subInfo.description}
            </StyledSubInfo>

            <ProjectStack>
                {subInfo.stack.map(stackItem => (
                    <ProjectStackItem name={stackItem} />
                ))}
            </ProjectStack>
        </StyledProjectInfoPanel>
    )
}

export default ProjectInfoPanel
