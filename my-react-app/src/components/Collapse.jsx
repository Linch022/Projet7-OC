import { useState } from 'react';
import arrow from '../assets/Vector.svg';
import PropTypes from 'prop-types';

function Collapse({ collapseData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [collapseClass, setCollapseClass] = useState('collapse-txt');
  const toggleCollapse = () => {
    isOpen
      ? setCollapseClass('collapse-txt collapse-closed')
      : setCollapseClass('collapse-txt collapse-open');
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse-item'>
      <div className='collapse-head'>
          <h2 className='collapse-head__title'>{collapseData.title}</h2>
        <button
          className={
            isOpen
              ? 'collapse-head__button collapse-head__button--open'
              : 'collapse-head__button'
          }
          onClick={toggleCollapse}
          aria-expanded={isOpen}
          aria-controls={`collapse-content-${collapseData.title}`}
        >
          <img src={arrow} alt={isOpen ? 'Fermer' : 'Ouvrir'} />
        </button>
      </div>

      {Array.isArray(collapseData.content) ? (
        <ul
          className={collapseClass}
          aria-controls={`collapse-content-${collapseData.title}`}
        >
          {collapseData.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p
          aria-controls={`collapse-content-${collapseData.title}`}
          className={collapseClass}
        >
          {collapseData.content}
        </p>
      )}
    </div>
  );
}

Collapse.propTypes = {
  collapseData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
};
export default Collapse;
