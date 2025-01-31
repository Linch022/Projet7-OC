import Banner from '../components/Banner';
import bannerImg from '../assets/banner.png';
import Card from '../components/Card';
import PropTypes from 'prop-types';

function Home({ data }) {
  const bannerTxt = 'Chez vous, partout et ailleurs';
  return (
    <div className='home'>
      <Banner bannerImg={bannerImg} bannerTxt={bannerTxt} />
      <h2 className='sr-only'>Accueil</h2>
      <div className='card-container'>
        {data.map((item) => (
            <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Home;
