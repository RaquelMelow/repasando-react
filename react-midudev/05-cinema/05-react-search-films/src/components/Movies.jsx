/* eslint-disable react/prop-types */

function RenderMovies({ movies }) {
    return (
        <ul className="movies">
            {
                // eslint-disable-next-line react/prop-types
                movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <h3 className="movie-title">{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
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