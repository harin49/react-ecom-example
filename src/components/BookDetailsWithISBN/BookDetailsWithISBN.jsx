import React from 'react';
import { useParams } from "react-router-dom";



export const BookDetailsWithISBN = () =>{
    const { isbn } = useParams();
    return <div className="home-container text-2xl">
        Welcome to the books details section, the ISBN is {isbn}
    </div>
}