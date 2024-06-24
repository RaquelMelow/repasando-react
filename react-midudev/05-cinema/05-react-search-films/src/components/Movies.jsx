/* eslint-disable react/prop-types */

function RenderMovies({ movies }) {
    return (
        <ul className="movies">
            {
                // eslint-disable-next-line react/prop-types
                movies.map(movie => (
                    <li className='movie' key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul >
    )
}

function NoMoviesResult() {
    return (

        <p>No se encontró esta película</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <RenderMovies movies={movies} />
            : <NoMoviesResult />
    );
}