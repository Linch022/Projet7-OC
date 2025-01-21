import PropTypes from 'prop-types';
import star from '../assets/Star.svg';
import starGray from '../assets/Star-gray.svg';

function Ratings({ rating }) {
  const maxStars = 5;
  const stars = Array(maxStars).fill(star);

  return (
    <ul className='ratings'>
      {stars.map((star, index) => (
        <li key={index}>
          <img
            src={index < parseInt(rating) ? star : starGray}
            alt=''
            className='ratings__star'
          />
        </li>
      ))}
    </ul>
  );
}

Ratings.propTypes = {
  rating: PropTypes.string.isRequired,
};
export default Ratings;
