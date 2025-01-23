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
        <p className='collapse-head__title'>{collapseData.title}</p>
        <button
          className={
            isOpen
              ? 'collapse-head__button collapse-head__button--open'
              : 'collapse-head__button'
          }
          onClick={toggleCollapse}
        >
          <img src={arrow} alt='' />
        </button>
      </div>

      {Array.isArray(collapseData.content) ? (
        <ul className={collapseClass}>
          {collapseData.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={collapseClass}>{collapseData.content}</p>
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
