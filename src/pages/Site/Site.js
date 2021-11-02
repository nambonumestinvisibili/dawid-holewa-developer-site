import React from 'react'
import { BigScreen } from '../../components/responsiveness/Layout'
import WelcomePage from '../WelcomePage/WelcomePage'
import Navbar from '../../components/Navbar/Navbar'
import AboutPage from '../AboutPage/AboutPage'
import Separator from '../../components/Separator/Separator'
import WorkPage from '../WorkPage/WorkPage'

const Site = () => {
    return (
        <>
            <WelcomePage />
            <Navbar />
            <Separator />
            <AboutPage />
            <Separator />
            <WorkPage />
            <Separator />
            
        </>
    )
}

export default Site
