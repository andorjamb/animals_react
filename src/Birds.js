import React from 'react';
import Card from './Card';
import './Animals.css';

const Birds = (props) => {

    const birdFilter = props.birds.filter(bird => { return bird.name.toLowerCase().includes(props.search) });
    const birdsList = birdFilter.map((bird) => {
        return (
            <Card
                name={bird.name}
                key={bird.name.toLowerCase()}
                likes={bird.likes}
                removeCard={() => props.removeBird(bird.name)}
                addLike={() => props.addLikeHandler(bird.name)}
                removeLike={() => props.removeLikeHandler(bird.name)}

            />);
    });

    return (
        <div className='animals'>
            <h1>Birds</h1>
            <div className="main-flex">
                {birdsList}
            </div></div>
    )
};


export default Birds;

