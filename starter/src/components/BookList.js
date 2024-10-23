import BookItem from "./BookItem";
import PropTypes from "prop-types";

const BookList = ({ books, handleStatusChange }) => {
  const changeStatus = (bookDetails, status) => {
    handleStatusChange(bookDetails, status);
  };

  return (
    <ol className="books-grid">
      {books &&
        books.map((book) => (
          <li key={book.id}>
            <BookItem handleChange={changeStatus} book={book} key={book.id} />
          </li>
        ))}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
};

export default BookList;
