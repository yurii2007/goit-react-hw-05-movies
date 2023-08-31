import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getFilmByQuery } from 'utils/tmdbApi';

const Movies = () => {
  const [input, setInput] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    (async () => {
      const getFilms = await getFilmByQuery(query);
      setFilms([...getFilms.results]);
    })();
  }, [query]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.query.value });
    setInput('');
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="query"
          onChange={handleChange}
          value={input}
          required
        />
        <button type="submit">Search</button>
      </form>
      {films.length > 0 && (
        <ul>
          {films.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{from: location}} >{el.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
