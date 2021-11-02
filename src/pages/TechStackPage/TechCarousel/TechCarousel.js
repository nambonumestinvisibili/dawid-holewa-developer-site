import React, { useState } from 'react'
import CarouselItem from './CarouselItem';
import TechInfo from './TechInfo';

const Carousel = require( '3d-react-carousal').Carousel;

const TechStackItems = [
    {
        id: 0,
        name: 'Python',
        description: 'some description..........',
        image: null
    },
    {
        id: 1,
        name: 'Java',
        description: 'some description..........',
        image: null
    },
    {
        id: 2,
        name: 'C#',
        description: 'some description..........',
        image: null
    },
    {
        id: 3,
        name: 'Git',
        description: 'some description..........',
        image: null
    },
    {
        id: 4,
        name: 'React',
        description: 'some description..........',
        image: null
    },
    {
        id: 5,
        name: 'Gatsby',
        description: 'some description..........',
        image: null
    },
    {
        id: 6,
        name: 'POO',
        description: 'some description..........',
        image: null
    },
]

const TechCarousel = () => {
    const [currentId, setCurrentId] = useState(null)
    const [isExtended, setIsExtended] = useState(false)
    const [currentTechObject, setCurrentTechObject] = useState(null)

    return (
        <div>
            <Carousel slides={TechStackItems.map(item => <CarouselItem image={item.image} name={item.name} />)}/>
            <TechInfo techObject={currentTechObject} />
        </div>
    )
}

export default TechCarousel
