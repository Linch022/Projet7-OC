function Banner({ bannerImg, bannerTxt }) {
  return (
    <figure className='banner'>
      <img src={bannerImg} alt='' className='banner__img' />
      {bannerTxt ? (
        <figcaption className='banner__txt'>{bannerTxt}</figcaption>
      ) : null}
    </figure>
  );
}

export default Banner;
