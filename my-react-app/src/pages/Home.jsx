import Banner from '../components/Banner';
import bannerImg from '../assets/banner.png';
import Card from '../components/Card';
import { Link } from 'react-router';

function Home({ data }) {
  console.log(data);

  const bannerTxt = 'Chez vous, partout et ailleurs';
  return (
    <div className='home'>
      <Banner bannerImg={bannerImg} bannerTxt={bannerTxt} />
      <ul className='card-container'>
        {data.map((item) => (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <li className='card-box'>
              <Card data={item} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
