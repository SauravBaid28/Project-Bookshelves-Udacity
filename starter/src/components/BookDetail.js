import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../BooksAPI";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBookDetail = async (id) => {
      try {
        const res = await get(id);
        setBook(res);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };
    getBookDetail(id);
  }, [id]);

  return (
    <div>
      {Object.keys(book).length > 0 && (
        <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="book-details">
            <Link className="close-search" to="/">
              Close
            </Link>
            <h1>Title: {book.title}</h1>
            <div className="book-section">
              <div className="book-image">
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
              </div>
              <div className="book-detail-info">
                <div>
                  <strong>Authors: </strong>
                  {book.authors && book.authors.join(", ")}
                </div>
                <div>
                  <strong>Publisher: </strong>
                  {book.publisher}
                </div>
                <div>
                  <strong>Published Date: </strong>
                  {book.publishedDate}
                </div>
                <div>
                  <strong>Categories: </strong>
                  {book.categories && book.categories.join(", ")}
                </div>
                <div>
                  <strong>Page Count: </strong>
                  {book.pageCount}
                </div>
                <div>
                  <strong>Language: </strong>
                  {book.language}
                </div>
                <div>
                  <strong>Description: </strong>
                  {book.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
