const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c';

// Fetches books by genre and transforms the data
export const fetchBooksByGenre = async (category) => {
  const params = new URLSearchParams({
    q: `subject:${category}`,
    maxResults: 32,
    key: API_KEY,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    const items = data.items || [];

    // Transform the items to ensure they have necessary properties
    const transformedItems = items.map(item => {
      const volumeInfo = item.volumeInfo || {};
      const title = volumeInfo.title || 'No title available';
      const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No authors available';
      const imageLinks = volumeInfo.imageLinks || {};
      const thumbnail = imageLinks.thumbnail || '/fallbackimg.png';
      const description = volumeInfo.description || 'No description available';
      const categories = volumeInfo.categories ? volumeInfo.categories.join(', ') : 'No genres available';
      const publishedDate = volumeInfo.publishedDate || 'No release date available';
      const publisher = volumeInfo.publisher || 'Publisher information is not available';

      return {
        id: item.id,
        title,
        authors,
        thumbnail,
        description,
        categories,
        publishedDate,
        publisher
      };
    });

    return transformedItems;
  } catch (error) {
    console.error("Could not fetch books by genre:", error);
    return []; // Return empty array in case of error
  }
};


// const apiKey = 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c';
// const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

// export async function fetchFiction(searchTerm = 'fiction') {
//   const queryString = new URLSearchParams({
//     q: searchTerm,
//     maxResults: 20,
//     key: apiKey,
//     orderBy: 'averageRating',
//     sortDir: 'desc',
//   });

//   const url = `${baseUrl}?${queryString.toString()}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error fetching books: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.items; // Assuming data structure with 'items' containing book information
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     // Handle errors appropriately, like displaying an error message to the user
//     return []; // Return empty array in case of error
//   }
// }

// // Remember to use the function in a useEffect or in response to user action in your components


// bookGenre.js
// export const fetchBooksByGenre = async (genre) => {
//   const queryString = new URLSearchParams({
//     q: `subject:${genre}`,
//     maxResults: 20,
//     key: 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c',
//   });

//   const url = `https://www.googleapis.com/books/v1/volumes?${queryString.toString()}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.items || [];
//   } catch (error) {
//     console.error("Could not fetch books by genre:", error);
//     return [];
//   }
// };


// const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
// const API_KEY = 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c';

// // Fetches books by genre
// export const fetchBooksByGenre = async (genre) => {
//   const params = new URLSearchParams({
//     q: `subject:${genre}`,
//     maxResults: 20,
//     key: API_KEY,
//   });

//   try {
//     const response = await fetch(`${BASE_URL}?${params}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }
//     const data = await response.json();
//     return data.items || [];
//   } catch (error) {
//     console.error("Could not fetch books by genre:", error);
//     return [];
//   }
// };
