import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Ratings from '../components/Ratings';
import Host from '../components/Host';

function HousingSheet({ data }) {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const foundItem = data.find((i) => i.id === id);
    console.log(data);
    console.log(id);

    console.log(foundItem);

    setItem(foundItem);
  }, [id, data]);

  if (!item) {
    return <p className='loader-housing-sheet'>Chargement...</p>;
  }

  return (
    <div className='place'>
      <Slideshow pictures={item.pictures} />
      <div className='place__header-container'>
        <h2 className='place__title'>{item.title}</h2>
        <p className='place__location'>{item.location}</p>
        <ul className='place__tags-container'>
          {item.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </ul>
        <div className='place__host'>
          <Ratings rating={item.rating} />
          <Host host={item.host} />
        </div>
      </div>
    </div>
  );
}

HousingSheet.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
export default HousingSheet;
