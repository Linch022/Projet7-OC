import PropTypes from 'prop-types';

function Banner({ bannerImg, bannerTxt }) {
  return (
    <figure className='banner' role='region' aria-label='Bannière principale'>
      <img
        src={bannerImg}
        alt='Image représentant un paysage'
        className='banner__img'
      />
      {bannerTxt ? (
        <figcaption className='banner__txt'>{bannerTxt}</figcaption>
      ) : null}
    </figure>
  );
}

Banner.propTypes = {
  bannerImg: PropTypes.string,
  bannerTxt: PropTypes.string,
};

export default Banner;
