import React, { useContext } from "react";
import { BookContext } from "../../../context/BookContext";

// context
// import { useBookContext } from "../../../context/BookContext";

// components
import BookAction from "./BookAction";

export default function BookItem() {
  // const { books } = useBookContext();
  const { books } = useContext(BookContext);
  console.log("a", books);
  return (
    <div>
      BookItem
      {books.map((book) => (
        <div key={book.id}>
          Title: {book.title} <br />
          Price: {book.price} <br />
          <BookAction bookId={book.id} />
        </div>
      ))}
    </div>
  );
}
