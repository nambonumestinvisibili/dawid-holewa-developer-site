import React from 'react'
import NavbarLink from './NavbarLink'
import styled from 'styled-components'
import { ANCHORS } from '../../constants/anchors'

const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 2vw;
    margin-top: 4vw;
    height: 7vw;
    align-items: center;
    position: sticky;
    background-color: black;
    top: 0;
    font-family: Archivo Black;
    font-weight: 100;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarLink text={"Home"} toLink={ANCHORS.WELCOME}/>
            <NavbarLink text={"About"} toLink={ANCHORS.ABOUT} />
            <NavbarLink text={"Work"} toLink={ANCHORS.WORK} />
            <NavbarLink text={"Stack"} toLink={ANCHORS.STACK}/>
            <NavbarLink text={"Contact"} ender toLink={ANCHORS.CONTACT}/>
        </StyledNavbar>
    )
}

export default Navbar
