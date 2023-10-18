import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getBook } from "../../clients/books.api";
import BookPriceAndRating from "../common/book-rating";
import BookAuthors from "../common/book-authors";
import Thumbnail from "../common/book-thumbnail";
import BookTitle from "../common/book-title";
import BookDescription from "./description";

const BookDetails = ({ onAddToCart }) => {
  const { isbn } = useParams();
  const [book, setBook] = useState({
    "id": 1,
    "title": "Unlocking Android",
    "isbn": "1933988673",
    "pageCount": 416,
    "publishedDate": "2009-04-01T00:00:00.000-0700",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
    "status": "PUBLISH",
    "rating": 4,
    "discount": 15,
    "price": 320,
    "authors": [
      "W. Frank Ableson",
      "Charlie Collins",
      "Robi Sen"
    ],
    "categories": [
      "Open Source",
      "Mobile"
    ]
  });

  const handleAddToCart = () => {
    onAddToCart(book);
  };

  if (!book) {
    return <h1>No valid book details found</h1>;
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="container mx-auto flex flex-wrap">
        <div className="flex flex-wrap flex-col px-16 pt-16 pb-4 md:p-4 w-full md:w-1/4">
          <Thumbnail url={book.thumbnailUrl} title={book.title} size="large" />
          <button
            onClick={handleAddToCart}
            className="w-full p-4 bg-orange-600 text-white text-xl font-bold hover:bg-orange-500 active:bg-orange-600 hover:text-gray-800 hover:outline hover:outline-orange-600"
            title="Add To Cart"
          >
            Add To Cart
          </button>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
          <BookTitle title={book.title} size="large" />
          <BookAuthors authors={book.authors} />
          <BookPriceAndRating
            price={book.price}
            rating={book.rating}
            discount={book.discount}
          />
          <BookDescription book={book} />
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default BookDetails;
