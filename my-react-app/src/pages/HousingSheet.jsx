import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import Slideshow from '../components/Slideshow';

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
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <Slideshow pictures={item.pictures} />
    </div>
  );
}

HousingSheet.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default HousingSheet;
