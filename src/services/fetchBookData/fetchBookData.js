const API_KEY = 'AIzaSyB1-dQHNpB4IHqzk8mYERBnFTyjfpw_l_c';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function fetchBookData(searchTerm, searchType = 'author') {           // , searchType = 'author' is not currently functional
    const encodedSearchTerm = encodeURIComponent(searchTerm);      // apparently not really necessary, should be automatically encoded by fetch

    const queryPrefix = searchType === 'author' ? 'inauthor:' : 'intitle:';  // should default to author search, but not currently functional
    const queryString = new URLSearchParams({
        q: `${queryPrefix}${encodedSearchTerm}`, // should be `${queryPrefix}${encodedSearchTerm}` but not currently functional   
        maxResults: 32,
        key: API_KEY,
    });
    
    const url = `${BASE_URL}?q=${queryString.toString()}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching books: ${response.statusText}`);
        }

        const data = await response.json();
        const items = data.items || [];

        // transformed items to ensure they have necessary properties (works for both Bookcard & BookModal components)
        const transformedItems = items.map(item => {
            const volumeInfo = item.volumeInfo || {};
            const title = volumeInfo.title || 'No title available';
            const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No authors available';
            const imageLinks = volumeInfo.imageLinks || {};
            const thumbnail = imageLinks.thumbnail || '../../../public/fallbackimg.png';
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
        console.error('Error fetching books:', error);
        return []; // returns empty array in case of error, for now
    }
}