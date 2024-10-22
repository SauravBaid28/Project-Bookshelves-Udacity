const BookStatus = ({ status, changeStatus }) => {
  const handleStatusChange = (event) => {
    changeStatus(event.target.value);
  };

  const isDisabled = status !== undefined;

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleStatusChange(e)}
        value={isDisabled ? status : "none"}
      >
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" disabled={isDisabled}>
          None
        </option>
      </select>
    </div>
  );
};

export default BookStatus;
