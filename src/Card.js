import React from 'react';
import './card.css';


function Card(props) {


    return (
        <div className="card">
            <div className="titleBar"><h2>{props.name}</h2>
                <button className="removeBtn" onClick={props.removeCard}>X</button></div>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
            <div className="likeBar"><p className="heart">{props.likes}</p><button className="addLikes" onClick={props.addLikeHandler}></button></div>

        </div>)


}

export default Card;