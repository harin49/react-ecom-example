import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';



export const Home = () =>{
    return <div className="home-container text-2xl">
        Welcome to the books catalog experiment! Click the below button to check the catalog!
        <Link to="/books">
        <button className="mt-6 py-2 px-3 bg-indigo-500 text-white text-lg font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
            Go to catalog
        </button>
        </Link>
    </div>
}