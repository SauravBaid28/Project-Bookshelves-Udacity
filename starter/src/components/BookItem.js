import { useNavigate } from "react-router-dom";
import BookStatus from "./BookStatus";
import PropTypes from "prop-types";

const BookItem = ({ handleChange, book }) => {
  const navigate = useNavigate();

  const handleStatus = (status) => {
    let bookDetails = {
      ...book,
      shelf: status,
    };
    handleChange(bookDetails, status);
  };

  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
          }}
        >
          {book.imageLinks && (
            <img
              src={book.imageLinks.thumbnail}
              alt={book.title}
              style={{
                width: 128,
                height: 192,
              }}
            />
          )}
        </div>
        <BookStatus
          status={book.shelf}
          changeStatus={handleStatus}
        ></BookStatus>
      </div>
      <div onClick={handleClick} className="book-info">
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((author, idx) => (
            <div className="book-authors" key={idx}>
              {author}
            </div>
          ))}
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BookItem;
