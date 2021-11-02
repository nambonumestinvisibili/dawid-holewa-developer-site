import React from 'react'
import Separator from '../../components/Separator/Separator'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import TechCarousel from './TechCarousel/TechCarousel'

const TechStackPage = () => {
    return (
        <div>
            <Title>
                Technology <YellowElement>stack</YellowElement>
            </Title>
            <Separator />
            <TechCarousel />
        </div>
    )
}

export default TechStackPage
