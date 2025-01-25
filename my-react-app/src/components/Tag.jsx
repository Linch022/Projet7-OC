import PropTypes from 'prop-types';

function Tag({ tag }) {
  return <li className='tag'>{tag}</li>;
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
export default Tag;
