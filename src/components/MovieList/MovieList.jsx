import { Link, useLocation } from "react-router-dom";

const MovieList = ({ films }) => {
  const location = useLocation()
  
  return (
    <ul>
      {films.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {el.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
