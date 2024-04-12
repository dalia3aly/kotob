import React from 'react';
import styles from './GenreButton.module.css';


const genres = ['Fiction', 'Mystery', 'Science', 'Fantasy', 'Romance', 'Education', 'Biography', 'History', 'Health', 'Cooking'];

const GenreButton = ({ onSelectGenre }) => {
    return (
        <div className='genreButtonsDiv'>
            {genres.map((genre) => (
                <button className={styles.genreButton} key={genre} onClick={() => onSelectGenre(genre)}>
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreButton;
