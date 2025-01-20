import { useState } from 'react';
import vector from '../assets/Vector.svg';
import PropTypes from 'prop-types';

function Collapse({ collapseData }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='collapse'>
      <p className='collapse__title'>{collapseData.title}</p>
      <button className='collapse__button' onClick={toggleCollapse}>
        <img src={vector} alt='' />
      </button>
      {isOpen && (
        <ul>
          {collapseData.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

Collapse.propTypes = {
  collapseData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Collapse;
