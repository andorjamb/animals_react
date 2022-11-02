import React from 'react';
import './card.css';


function Card(props) {
    return (
        <div className="card">
            <div className="titleBar"><h2>{props.name}</h2>
                <button className="removeBtn">X</button></div>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
            <p>{props.likes}</p><button className="addLikes"></button>

        </div>)


}

export default Card;