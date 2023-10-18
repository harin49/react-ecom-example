import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Thumbnail from "../common/book-thumbnail";
import BookTitle from "../common/book-title";
import BookPriceAndRating from "../common/book-rating";
import BookAuthors from "../common/book-authors";

const BookCard = ({ book }) => {
  const { isbn, thumbnailUrl, title, authors, price, rating, discount } = book;

  return (
    <Link
      to={`/books/${isbn}`}
      className="w-80 mx-10 my-11 transform rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg"
    >
      <Thumbnail url={thumbnailUrl} title={title} size="medium" />
      <BookTitle title={title} size="medium" />
      <BookPriceAndRating price={price} rating={rating} discount={discount} />
    </Link>
  );
};

export default BookCard;
