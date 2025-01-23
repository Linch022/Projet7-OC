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
    <div className='slideshow'>
      <img
        src={arrow}
        alt=''
        className='slideshow__arrow slideshow__arrow--right'
        onClick={() => next('+')}
      />
      <img
        src={arrow}
        alt=''
        className='slideshow__arrow slideshow__arrow--left'
        onClick={() => next('-')}
      />
      <img src={pictures[count]} alt='' className='slideshow__img' />
      <p className='slideshow__counter'>{`${count + 1}/${pictures.length}`}</p>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};
export default Slideshow;
