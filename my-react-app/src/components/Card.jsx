function Card({ data }) {
  return (
    <>
      <figure className='card'>
        <img src={data.cover} className='card__img' alt='' />
        <figcaption className='card__txt'>{data.title}</figcaption>
      </figure>
    </>
  );
}

export default Card;
