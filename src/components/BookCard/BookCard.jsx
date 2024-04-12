import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import styles from './BookCard.module.css';
// import BookModal from '../BookModal/BookModal';

const BookCard = ({ bookData }) => {
    if (!bookData) return <div>No book data provided.</div>;

    const fallbackImage = '../../../fallbackimg.png';
    const title = bookData.title;
    const thumbnail = bookData.thumbnail || fallbackImage;
    const authors = bookData.authors;
    const description = bookData.description;

    const handleBookClick = () => {
        console.log('Book clicked:', bookData.title);

    };

    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <div className={styles.bookCard}>
                <img src={thumbnail} className={styles.bookCover} />
                <h4 className={styles.bookTitle}>Title: {title.substring(0, 70) + '...'}</h4>
                <h4 className={styles.bookAuthors}>Author: {authors.substring(0, 70) + '...'}</h4>
                <p className={styles.bookDescription}>Description: {description.substring(0, 100) + '...'}</p>
            </div>
        </ErrorBoundary>
    );
};

export default BookCard;