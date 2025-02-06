import PropTypes from 'prop-types';
import arrow from '../assets/Vector.svg';
import { useState } from 'react';

function Slideshow({ pictures }) {
  const [count, setCount] = useState(0);

  const changeSlide = (number) => {
    setCount((prevCount) => 
      (prevCount + number + pictures.length) % pictures.length
    );    
  };

  return (
    <div
      className='slideshow'
    >
      { pictures.length > 1 ?
      <>
      <button
        className='slideshow__arrow slideshow__arrow--left'
        onClick={() => changeSlide(-1)}
        >
        <img src={arrow} alt='Image précédente' />
      </button>
      <button
      className='slideshow__arrow slideshow__arrow--right'
      onClick={() => changeSlide(+1)}
      >
        <img src={arrow} alt='Image suivante' />
      </button>
      <img src={pictures[count]} alt='' className='slideshow__img' />
      <p className='slideshow__counter' aria-label='Compteur d"image :'>{`${
        count + 1
      }/${pictures.length}`}</p>
      </> 
        : 
        <img src={pictures[count]} alt='' className='slideshow__img' />
      }
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};
export default Slideshow;
