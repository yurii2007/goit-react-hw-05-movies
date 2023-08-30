import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/tmdbApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getReviews(movieId);
      setReviews(result.results);
    })();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <h4>Author: {el.author}</h4>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
