import React from 'react';
import './Card.css';


function Card(props) {

    return (
        <div className="card">
            <div className="titleBar"><h2>{props.name}</h2>
                <button className="removeBtn" onClick={props.removeCard}>X</button></div>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}>
            </img>

            <div className="likeBar">
                <button className="dislikesBtn" onClick={props.removeLikes}>heart_minus</button>
                <p className="heart">
                    Favorite
                    {props.likes}
                </p>
                <button className="addLikesBtn" onClick={props.addLikes}>heart_plus</button>
            </div>

        </div>)


}

export default Card;