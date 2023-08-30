import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getFilmById } from 'utils/tmdbApi';
import { InfoWrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getFilmById(movieId);
      setFilm(response);
    })();
  }, [movieId]);

  return (
    <>
      <Link to="/">Go Back</Link>
      {film && (
        <InfoWrapper>
          <img
            src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            alt={film.original_title}
          />
          <div>
          <h2>
            {film.original_title}({parseInt(film.release_date)})
          </h2>
          <p>User Score: {parseInt(film.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <ul className='genres-list'>
            {film.genres.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
          </div>
        </InfoWrapper>
      )}
      <div>
        <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;