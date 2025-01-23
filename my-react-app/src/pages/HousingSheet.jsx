import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Ratings from '../components/Ratings';
import Host from '../components/Host';
import Collapse from '../components/Collapse';

function HousingSheet({ data }) {
  const [item, setItem] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundItem = data.find((i) => i.id === id);
    if (!foundItem) {
      setItem('inconnu');
    } else {
      setItem(foundItem);
    }
  }, [data, id]);

  if (!item) {
    return <p className='loader-housing-sheet'>Chargement...</p>;
  } else if (item === 'inconnu') {
    setTimeout(() => {
      navigate('/');
    }, 2000);
    return (
      <>
        <p className='loader-housing-sheet'>
          Le bien n&apos;a pas été trouvé... <br />
          Vous allez être redirigé vers l&apos;accueil
        </p>
      </>
    );
  }

  return (
    <div className='place'>
      <Slideshow pictures={item.pictures} />
      <div className='place__information'>
        <div className='place__header-container'>
          <h2 className='place__title'>{item.title}</h2>
          <p className='place__location'>{item.location}</p>
          <ul className='place__tags-container'>
            {item.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </ul>
        </div>
        <div className='place__host-container'>
          <Ratings rating={item.rating} />
          <Host host={item.host} />
        </div>
      </div>
      <div className='place__collapse-container'>
        <Collapse
          collapseData={{ title: 'Description', content: item.description }}
        />
        <Collapse
          collapseData={{ title: 'Équipement', content: item.equipments }}
        />
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
