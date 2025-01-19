import { Link, useLocation } from 'react-router';
import logo from '../assets/LOGO.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className='nav'>
        <h1>
          <img src={logo} className='nav__logo' alt='Kasa' />
        </h1>
        <ul className='nav__link-container'>
          <li>
            <Link
              to='/'
              className={
                (pathname === '/' ? 'nav__link--active ' : '') + 'nav__link'
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to='/a-propos'
              className={
                (pathname === '/a-propos' ? 'nav__link--active ' : '') +
                'nav__link'
              }
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
