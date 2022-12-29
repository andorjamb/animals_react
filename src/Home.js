import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">
            <div className="page-title"><h1>Home</h1></div>
            <div className="main-flex">
                <Link to="/animals" ><div className="home-card animal">  <h2>Animals</h2></div></Link>
                <Link to="/birds" ><div className="home-card bird"><h2>Birds</h2></div></Link>


            </div ></div>
    );
};

export default Home;