import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./components/main";
import SearchBook from "./components/SearchBook";
import BookDetail from "./components/BookDetail";
import { getAll, update } from "./BooksAPI";
import PageNotFound from "./components/PageNotFound";

export const bookCategory = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
};

function App() {
  const [bookList, setBookList] = useState();

  const handleChangeStatus = (bookDetails, status) => {
    let book = bookList.find((book) => book.title === bookDetails.title);
    if (book) {
      book.shelf = status;
    } else {
      bookList.push(bookDetails);
    }
    updateBookStatus(bookDetails, status);
    setBookList([...bookList]);
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll();
      setBookList([...books]);
    };
    getAllBooks();
  }, []);

  const updateBookStatus = async (bookDetails, status) => {
    await update(bookDetails, status);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main bookList={bookList} handleChangeStatus={handleChangeStatus} />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <SearchBook bookList={bookList} handleStatus={handleChangeStatus} />
        }
      />
      <Route exact path="/book/:id" element={<BookDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
