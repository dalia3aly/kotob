import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import LeftTopContainer from "../LeftTopContainer/LeftTopContainer";
import RightBottomContainer from "../RightBottomContainer/RightBottomContainer";
import { fetchBookData } from "../../services/fetchBookData/fetchBookData";
import { fetchBooksByGenre } from "../../services/bookGenre/bookGenre";


// The main Grand Parent Component //

function LandingPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectGenre = async (genre) => {
    const fetchedBooks = await fetchBooksByGenre(genre);
    setBooks(fetchedBooks);
  };

  const onSearch = async (searchTerm, searchType) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBookData(searchTerm, searchType);
      setBooks(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.LandingPage}>
       {loading && <p> </p>}
        {error && <p>Error: {error}</p>}
        <div className={styles.leftContainer}>
      <LeftTopContainer onSelectGenre={handleSelectGenre} onSearch={onSearch} />
      </div>
      <div className={styles.rightContainer}>
      <RightBottomContainer books={books} loading={loading}/>
      </div>
    </div>
  );
}

export default LandingPage;