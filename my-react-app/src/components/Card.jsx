import PropTypes from 'prop-types';
function Card({ data }) {
  return (
    <>
      <figure className='card'>
        <img
          src={data.cover}
          className='card__img'
          alt={`Illustration de ${data.title}`}
        />
        <figcaption className='card__txt'>
          <h3>{data.title}</h3>
        </figcaption>
      </figure>
    </>
  );
}
Card.propTypes = {
  data: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
