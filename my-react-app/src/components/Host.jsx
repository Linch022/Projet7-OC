import PropTypes from 'prop-types';

function Host({ host }) {
  const name = host.name.replace(/ /g, '\n');
  return (
    <div className='host'>
      <p className='host__name'>{name}</p>
      <img src={host.picture} alt='' className='host__img' />
    </div>
  );
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
export default Host;
