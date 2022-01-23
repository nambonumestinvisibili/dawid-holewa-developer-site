import React from 'react'
import Rellax from 'rellax'
import styled from 'styled-components'
import Button from '../../components/Buttons/Button'
import { BlackColour, WhiteColour } from '../../components/responsiveness/ColourConstants'
import { useRef, useEffect, useState } from 'react'
import ProjectInfoPanel from './ProjectInfoPanel/ProjectInfoPanel'
import { COLORS } from '../../constants/colors'
import { useResponsiveness } from '../../hooks/responsiveness/useResponsiveness'

const StyledProjectTile = styled.div`
    width: 100%;
    height: 100%;
    min-height: 10vw;
    max-height: 700px;
    margin: 0 auto;
    background: url(${ props => props.imageSource });
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    transition: height 1s;
    ${({ extended }) => extended && 'height: 300%;'}
`

const StyledProjectTitle = styled.p`
    font-size: calc(30px + 8vw);
    font-family: Archivo Black;
    opacity: 18%;
    position: absolute;
    margin-top: 0;
    color: ${BlackColour};
    user-select: none;
    line-height: 100%;
    background-color: ${props => props.extended && WhiteColour};

    &:hover {
        opacity: 30%;
    }
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.extended && COLORS.black_70};
    
`

const ProjectTile = ({ title, imageSource, subInfo }) => {

    const imageRef = useRef(null)
    const [isExtended, setIsExtended] = useState(false)
    
    // useEffect(() => {
    //     new Rellax(imageRef.current, {
    //         speed: -10,
    //         center: false,
    //         wrapper: null,
    //         round: true,
    //         vertical: true,
    //         horizontal: false
    //     })
    // }, []) 
    const { isMobileDevice } = useResponsiveness()

    return (
        <StyledProjectTile 
            ref={imageRef} 
            imageSource={imageSource}
            extended={isExtended}
            isSmallView={isMobileDevice}
        >
            <Overlay extended={isExtended} >
                <StyledProjectTitle 
                    extended={isExtended}
                    onClick={() => {setIsExtended(!isExtended)}}
                >
                    { title }
                </StyledProjectTitle>
            </Overlay>
            <ProjectInfoPanel subInfo={subInfo} visible={isExtended} />
        </StyledProjectTile>
    )
}

export default ProjectTile
