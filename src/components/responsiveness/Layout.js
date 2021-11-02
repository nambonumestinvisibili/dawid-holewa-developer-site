import styled, { createGlobalStyle } from 'styled-components'

import ArchivoBlack from '../../fonts/ArchivoBlack-Regular.ttf'
import ArchivoRegular from '../../fonts/Archivo-Regular.ttf'
import { BlackColour } from './ColourConstants'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Archivo Black';
        src: local('Archivo Black'), local('ArchivoBlack'), url(${ArchivoBlack});
        font-weight: 300;
        font-style: normal;
        font-size: 30px;
    }

    @font-face {
        font-family: 'Archivo';
        src: local('Archivo'), url(${ArchivoRegular});
        font-weight: 300;
        font-style: normal;
        font-size: 30px;
    }

    body {
        height: 100%;
        background: ${BlackColour};
        color: white;
        font-family: 'Archivo';
        font-size: 30px;
        margin: 0 auto;
        height: 100%;
    }
`

const BigScreen = styled.div`
    width: 1000px;
    height: 100px;
    background: #222222;
    margin: 0 auto; 
`

const Desktop = styled.div`
    width: 400px;
    height: 100px;
    background: #b097d8;
    margin: 0 auto;
`

const Laptop = styled.div`
    width: 500px;
    height: 100px;
    background: #9674cb;
    margin: 0 auto;
`

const TabletMobile = styled.div`
    width: 300px;
    height: 100px;
    background: #cab9e5;
    margin: 0 auto;
`

const Mobile = styled.div`
    width: 80px;
    height: 80px;
    margin: 0% auto;
    border-radius: 50%;
    box-shadow: 15px 15px 0 0 #e4dcf2;
`

export { BigScreen, Desktop, Laptop, TabletMobile, Mobile, GlobalStyle } 