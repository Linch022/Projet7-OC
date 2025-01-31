import PropTypes from 'prop-types';
import { Link } from 'react-router';
function Card({item}) {
 
  return (
    <Link to={`/logement/${item.id}`}>
      <article className='card'>
        <img
          src={item.cover}
          className='card__img'
          alt=""
        />
          <h3 className='card__txt'>{item.title}</h3>
      </article>
    </Link>
  );
}
Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
