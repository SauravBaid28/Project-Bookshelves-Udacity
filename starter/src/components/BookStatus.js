import PropTypes from "prop-types";

const BookStatus = ({ status, changeStatus }) => {
  const isDisabled = status !== undefined;
  const shelves = [
    {
      id: "1",
      value: "currentlyReading",
      label: "Currently Reading",
      disabled: false,
    },
    {
      id: "2",
      value: "wantToRead",
      label: "Want to Read",
      disabled: false,
    },
    {
      id: "3",
      value: "read",
      label: "Read",
      disabled: false,
    },
    {
      id: "4",
      value: "none",
      label: "None",
      disabled: isDisabled,
    },
  ];
  const handleStatusChange = (event) => {
    changeStatus(event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleStatusChange(e)}
        value={isDisabled ? status : "none"}
      >
        {shelves.map((shelf) => (
          <option key={shelf.id} value={shelf.value} disabled={shelf.disabled}>
            {shelf.label}
          </option>
        ))}
      </select>
    </div>
  );
};

BookStatus.propTypes = {
  status: PropTypes.string,
  changeStatus: PropTypes.func.isRequired,
};

export default BookStatus;
