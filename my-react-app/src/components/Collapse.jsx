import { useState } from 'react';
import arrow from '../assets/Vector.svg';
import PropTypes from 'prop-types';

function Collapse({ collapseData }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
      {isOpen && (
        <ul className='collapse-txt'>
          {collapseData.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

Collapse.propTypes = {
  collapseData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Collapse;
