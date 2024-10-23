import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";
import { bookCategory } from "../App";

const BookShelf = ({ bookList, category, changeStatus }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    setBook([]);
    if (bookList) {
      bookList.forEach((item) => {
        if (item.shelf === category) {
          setBook((prev) => [...prev, item]);
        }
      });
    }
  }, [bookList]);

  const handleChange = (bookDetails, status) => {
    changeStatus(bookDetails, status);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookCategory[category]}</h2>
      <div className="bookshelf-books">
        {book && (
          <BookList books={book} handleStatusChange={handleChange}></BookList>
        )}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  category: PropTypes.string.isRequired,
  bookList: PropTypes.array.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default BookShelf;
