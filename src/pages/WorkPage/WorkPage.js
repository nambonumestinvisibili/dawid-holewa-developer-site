import React from 'react'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import moneyPlantImage from '../../images/money-plant.jpg'
import todoList from '../../images/todo-list.jpg'
import Separator from '../../components/Separator/Separator'
import ProjectTile from './ProjectTile'
import styled from 'styled-components'

const StyledWorkPage = styled.div`
    height: ${ props =>  props.extended ? '80vw' : '40vw' };
`

const WorkPage = () => {
    return (
        <StyledWorkPage>
            <Title>
                Check out my <YellowElement>work</YellowElement>
            </Title> 
            <Separator />
            <ProjectTile title={"Liberty Mutual"} imageSource={todoList} />
            <ProjectTile title={"Godzinna"} imageSource={moneyPlantImage} />                          
        </StyledWorkPage>
    )
}

export default WorkPage
