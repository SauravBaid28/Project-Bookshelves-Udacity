import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { bookCategory } from "../App";

const Main = ({ bookList, handleChangeStatus }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(bookCategory).map((data, index) => (
            <BookShelf
              category={data}
              bookList={bookList}
              changeStatus={handleChangeStatus}
              key={index}
            ></BookShelf>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Main;
