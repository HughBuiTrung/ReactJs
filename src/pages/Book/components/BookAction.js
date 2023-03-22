import React, { useContext } from "react";
import { BookContext } from "../../../context/BookContext";

// context
// import { useBookContext } from "../../../context/BookContext";

export default function BookAction({ bookId }) {
  // const { handleDeleteBook } = useBookContext();
  const { handleDeleteBook } = useContext(BookContext);

  return (
    <div>
      <button type="button" onClick={handleDeleteBook(bookId)}>
        Delete
      </button>
    </div>
  );
}
