import React, {useState} from "react";
import styles from "./BookModal.module.css";

const BookModal = ({ bookData, onClose }) => {
  if (!bookData) return null;

  return (
    <div className={styles.bookModal} onClick={onClose}>
      <div className={styles.bookModalBackdrop} onClick={(e) => e.stopPropagation()}>
      <img src={bookData.thumbnail} alt={`Cover of ${bookData.title}`} />
        <h2>Title: {bookData.title}</h2>
        <h3>Authour(s): {bookData.authors}</h3>
        <p>Genre(s): {bookData.categories}</p>
        <p>Published Date: {bookData.publishedDate}</p>
        <p>Publisher: {bookData.publisher}</p>
        <p>{bookData.description}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookModal;
