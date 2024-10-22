import React, { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import BookList from "./BookList";
import { Link } from "react-router-dom";

const SearchBook = ({ bookList, handleStatus }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const cleanData = (data) => {
    if (data) {
      let cleanedData = data.map((book) => {
        let exisitingBook = bookList.find((item) => {
          return item.title === book.title;
        });
        return {
          ...book,
          status:
            exisitingBook !== undefined ? exisitingBook.status : undefined,
        };
      });
      setResults(cleanedData);
    }
  };

  const onStatusChange = (bookDetails, status) => {
    handleStatus(bookDetails, status);
  };

  useEffect(() => {
    // Perform search logic here and update results
    // For example, you can call an API to get search results
    const debounceCall = setTimeout(() => {
      const searchBook = async () => {
        if (query !== "") {
          let res = await search(query);
          if (!("error" in res)) {
            cleanData(res);
          } else {
            setResults([]);
          }
        } else {
          setResults([]);
        }
      };
      searchBook();
    }, 500);

    return () => {
      clearTimeout(debounceCall);
    };
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    cleanData(results);
  }, [bookList]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
            value={query}
            name="search"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList
          books={results}
          existingBookList={bookList}
          handleStatusChange={onStatusChange}
        />
      </div>
    </div>
  );
};

export default SearchBook;
