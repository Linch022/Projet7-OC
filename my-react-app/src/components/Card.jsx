import PropTypes from 'prop-types';
function Card({ data }) {
  console.log(data);

  return (
    <>
      <figure className='card'>
        <img src={data.cover} className='card__img' alt='' />
        <figcaption className='card__txt'>{data.title}</figcaption>
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
