import React from 'react';
import Card from './Card';
import './Animals.css';


const Animals = (props) => {
    const animalFilter = props.animals.filter(animal => animal.name.includes(props.search));
    const animalsList = animalFilter.map((animal) => {
        return <Card
            name={animal.name.charAt(0).toUpperCase() + animal.name.substring(1)}
            key={animal.name}
            likes={animal.likes}
            removeCard={() => props.removeAnimal(animal.name)}
            addLike={() => props.animalAddLike(animal.name)}
            removeLike={() => props.animalRemoveLike(animal.name)}

        />
    });

    return (
        <div className='animals'>
            <h1>Animals</h1>
            <div className="main-flex">
                {animalsList}
            </div></div>
    )
}

export default Animals;