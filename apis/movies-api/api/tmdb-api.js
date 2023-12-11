import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            const errorData = await response.json(); // Read the error message from the API response
            throw new Error(`TMDB API Error: ${errorData.status_message}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
