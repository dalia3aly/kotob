import React, { useState } from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.css";

const BookList = ({ books, onBookClick }) => {
  return (
    <div className={styles.bookListContainer}>
      {books.map((book) => (
        <div
          key={book.id}
          className={styles.bookCardWrapper} onClick={() => onBookClick(book)}>
          <BookCard bookData={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
