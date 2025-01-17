import Banner from '../components/Banner';
import bannerImg from '../assets/banner.png';

function Home() {
  const bannerTxt = 'Chez vous, partout et ailleurs';
  return (
    <div className='home'>
      <Banner bannerImg={bannerImg} bannerTxt={bannerTxt} />
    </div>
  );
}

export default Home;
