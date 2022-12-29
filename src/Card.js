import React from 'react';
import './Card.css';

function Card(props) {
    return (<div className="card">
        <div className="name-div"><h2>{props.name}</h2>
            <button className="removeBtn" onClick={props.removeCard} key={props.name}>X</button>
        </div>

        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
        <div className="likeBar">
            <button className="dislikesBtn" onClick={props.removeLike}>heart_minus</button>
            <p className="heart">Favorite{props.likes}</p>
            <button className="addLikesBtn" onClick={props.addLike}>heart_plus</button>
        </div>
    </div>)
}

export default Card;