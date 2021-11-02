import React from 'react'
import { YellowColour } from '../responsiveness/ColourConstants'
const YellowElement = ({ children }) => {
    return (
        <span style={{color: YellowColour}}>
            { children }
        </span>
    )
}

export default YellowElement
