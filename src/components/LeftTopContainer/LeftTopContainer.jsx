import React from "react";
import GenreButton from "../GenreButton/GenreButton";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./LeftTopContainer.module.css";
// import img from "../../assets/kotob.png";

const LeftTopContainer = ({ onSelectGenre, onSearch }) => {
  const handleSearchSubmit = (event) => {
     event.preventDefault();
     const searchTerm = event.target.elements.search.value;
     onSearch(searchTerm);
  };

  return (
    <div className={styles.LeftTopContainer}>

      <img className= "logo"
        src= "../../public/kotob.png"
        alt="Kotob Logo"
        style={{ width: "450px", height: "450px", borderRadius: "50%"}}
      />

      <div className="genreButtonsDiv">
      <GenreButton className="genreButton" onSelectGenre={onSelectGenre} />
      </div>

      <div className="searchBar">
      <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default LeftTopContainer;
