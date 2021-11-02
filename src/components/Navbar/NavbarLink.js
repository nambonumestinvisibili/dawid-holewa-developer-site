import React from 'react'
import styled from 'styled-components'
import { YellowColour } from '../responsiveness/ColourConstants'

const StyledNavbarLink = styled.div`
    color: white;
    padding-right: 1vw;
    padding-left: 1vw;
    border-right: 1px solid white;
    border-right: ${ props => props.ender && 0};

    &:hover {
        color: ${YellowColour}
    }
`

const NavbarLink = ({ text, ender }) => {
    return (
        <StyledNavbarLink ender={ender}>
            { text }
        </StyledNavbarLink>
    )
}

export default NavbarLink
