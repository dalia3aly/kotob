// Fetches books by genre and transforms the data //

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c';

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
    return [];
  }
};