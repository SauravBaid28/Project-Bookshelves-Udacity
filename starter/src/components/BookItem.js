import { useNavigate } from "react-router-dom";
import BookStatus from "./BookStatus";

const BookItem = ({ handleChange, book }) => {
  const navigate = useNavigate();

  const handleStatus = (status) => {
    let bookDetails = {
      ...book,
      status: status,
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
            <img src={book.imageLinks.thumbnail} alt={book.title} />
          )}
        </div>
        <BookStatus
          status={book.status}
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

export default BookItem;
