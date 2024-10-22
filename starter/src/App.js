import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import SearchBook from "./components/SearchBook";
import BookDetail from "./components/BookDetail";

export const bookCategory = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
};

function App() {
  const [bookList, setBookList] = useState(() => {
    const savedData = localStorage.getItem("bookList");
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleChangeStatus = (bookDetails, status) => {
    let book = bookList.find((book) => book.title === bookDetails.title);
    if (book) {
      book.status = status;
    } else {
      bookList.push(bookDetails);
    }
    setBookList([...bookList]);
  };

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }, [bookList]);

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
    </Routes>
  );
}

export default App;
