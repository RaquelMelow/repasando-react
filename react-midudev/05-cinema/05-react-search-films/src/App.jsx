import './App.css';
import { Movies } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import { useState, useEffect, useRef } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('No se puede buscar una película vacía');
      return;
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número');
      return;
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function App() {
  const [sort, setSort] = useState('')
  const { search, setSearch, error } = useSearch('');
  const { movies: mappedMovies, getMovies } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' value={search} placeholder='Avatar, Star Wars...' />
          <button type='submit'>Buscar</button>

          <div className='checkbox-container'>
            <label>
              <input type='checkbox' onChange={handleSort} checked={sort} />
              Ordenar alfabéticamente
            </label>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
