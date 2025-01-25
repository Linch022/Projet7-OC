import PropTypes from 'prop-types';
import arrow from '../assets/Vector.svg';
import { useState } from 'react';

function Slideshow({ pictures }) {
  const [count, setCount] = useState(0);

  const next = (operator) => {
    setCount((prevCount) =>
      operator === '+'
        ? (prevCount + 1) % pictures.length
        : (prevCount - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div
      className='slideshow'
      role='region'
      aria-label={`Galerie de ${pictures.length} images`}
    >
      <button
        className='slideshow__arrow slideshow__arrow--right'
        onClick={() => next('+')}
        aria-label='Image suivante'
      >
        <img src={arrow} alt='' />
      </button>
      <button
        className='slideshow__arrow slideshow__arrow--left'
        onClick={() => next('-')}
        aria-label='Image précédente'
      >
        <img src={arrow} alt='' />
      </button>
      <img src={pictures[count]} alt='' className='slideshow__img' />
      <p className='slideshow__counter' aria-label='Compteur d"image :'>{`${
        count + 1
      }/${pictures.length}`}</p>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};
export default Slideshow;
