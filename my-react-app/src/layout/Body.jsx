import { Outlet } from 'react-router';

function Body() {
  return (
    <main className='main'>
      <Outlet />
    </main>
  );
}

export default Body;
