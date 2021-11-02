import React from 'react'
import NavbarLink from './NavbarLink'
import styled from 'styled-components'

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
            <NavbarLink text={"Home"}/>
            <NavbarLink text={"About"}/>
            <NavbarLink text={"Work"}/>
            <NavbarLink text={"Stack"}/>
            <NavbarLink text={"Contact"} ender/>
        </StyledNavbar>
    )
}

export default Navbar
