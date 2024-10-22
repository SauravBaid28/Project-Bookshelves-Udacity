import BookItem from "./BookItem";

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

export default BookList;
