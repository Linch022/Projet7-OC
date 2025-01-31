import { Outlet } from 'react-router';
import Header from './Header';

function Body() {
  return (
    <main className='main'>
      <Header />
      <Outlet />
    </main>
  );
}

export default Body;
