import { useState } from "react";
import BookList from "../BookList/BookList";
import BookModal from "../BookModal/BookModal";
import styles from "./RightBottomContainer.module.css";
import { Grid } from "react-loader-spinner";

function RightBottomContainer({ books, loading }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className={styles.rightContainer}>
      {loading ? (
        <Grid
          className={styles.loadingSpinner}
          visible={true}
          height="120"
          width="120"
          color="#ee8516"
          ariaLabel="grid-loading"
          radius="12.5"
        />
      ) : (
        <BookList books={books} onBookClick={handleBookClick} />
      )}

      {selectedBook && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
            <BookModal bookData={selectedBook} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RightBottomContainer;
