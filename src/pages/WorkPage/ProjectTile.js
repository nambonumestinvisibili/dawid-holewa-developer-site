import React from 'react'
import Rellax from 'rellax'
import styled from 'styled-components'
import Button from '../../components/Buttons/Button'
import { BlackColour } from '../../components/responsiveness/ColourConstants'
import { useRef, useEffect, useState } from 'react'

const StyledProjectTile = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: url(${ props => props.imageSource });
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    ${props => {
        if (props.extended) {
            return `
                height: 200%;
                filter: brightness(10%);
            `
        }
    }}
`

const StyledProjectTitle = styled.p`
    font-size: 144px;
    font-family: Archivo Black;
    opacity: 18%;
    position: absolute;
    margin-top: 0;
    color: ${BlackColour};
    user-select: none;
    line-height: 100%;

    &:hover {
        opacity: 30%;
    }
`

const ProjectTile = ({ title, imageSource }) => {

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

    return (
        <>
            <StyledProjectTile 
                ref={imageRef} 
                imageSource={imageSource}
                extended={isExtended}
            >
                <StyledProjectTitle 
                    onClick={() => {setIsExtended(!isExtended)}}
                >
                    { title }
                </StyledProjectTitle>
                
            </StyledProjectTile>
            {/* <ProjectInfoPanel /> */}
        </>
    )
}

export default ProjectTile
