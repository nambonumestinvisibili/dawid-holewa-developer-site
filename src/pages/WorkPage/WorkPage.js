import React from 'react'
import Title from '../../components/Title/Title'
import YellowElement from '../../components/YellowElement/YellowElement'
import moneyPlantImage from '../../images/money-plant.jpg'
import todoListImage from '../../images/todo-list.jpg'
import Separator from '../../components/Separator/Separator'
import ProjectTile from './ProjectTile'
import styled from 'styled-components'

const StyledWorkPage = styled.div`
    height: ${ ({ extended }) => extended ? '80vw' : '40vw' };
`
const Projects = [
    {
        name: 'Liberty Mutual',
        image: todoListImage,
        description: 'USA Insurance company project regarding adjuster-client communication flow. Part of an international team, managing claims, forms, notification and data processing system. Maintaining enormous structure of user and admin system.',
        stack: [
            'Jenkins', 'Java 7', 'Java 8',
            'GUnits', 'Gosu', 'Junit', 'Fitnesse', 
            'Guidewire', 'Bitbucket', 
            'Jira', 'DDD', 'DDT', 'Agile'
        ]
    },
    {
        name: 'Ninja',
        image: moneyPlantImage,
        description: 'Company management project keeping track of and estimating work hours, finances and employee details.',
        stack: [
            'Spring Cloud', 
            'Full microservices', 
            'Postgresql', 'Rabbit-mq', 'JWT', 'DDD',
            'DDT', 'Docker', 'React', 'Nginx', 'Redux', 'Gitlab', 'Material UI',
            'Java 11', 'JUnit', 'Spock', 'Gradle', 'Agile methodology', 
            'N-layered architecture', 'MinIO'
        ]
    },
]
const WorkPage = () => {
    return (
        <StyledWorkPage>
            <Title>
                Check out my <YellowElement>work</YellowElement>
            </Title> 
            <Separator />
            {Projects.map((project, idx) => (
                <ProjectTile
                    key={idx}
                    title={project.name}
                    imageSource={project.image}
                    subInfo={{description: project.description, stack: project.stack}}
                />
            ))}
        </StyledWorkPage>
    )
}

export default WorkPage
