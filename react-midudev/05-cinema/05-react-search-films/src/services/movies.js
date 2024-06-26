export async function searchMovies({ search }) {
    try {
        if (!search) {
            return [];
        }

        const response = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`);
        const json = await response.json();

        if (json.Error) {
            throw new Error(json.Error);
        }

        const movies = json.Search.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }));

        return movies;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}
