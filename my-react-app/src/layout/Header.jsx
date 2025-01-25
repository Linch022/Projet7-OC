import { Link, useLocation } from 'react-router';
import logo from '../assets/LOGO.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <div className='header'>
      <h1>
        <img src={logo} className='header__title' alt='Kasa' />
      </h1>
      <nav className='nav'>
        <ul className='nav__link-container'>
          <li>
            <Link
              to='/'
              className={
                (pathname === '/' ? 'nav__link--active ' : '') + 'nav__link'
              }
              role='navigation'
              aria-current={pathname === '/' ? 'page' : ''}
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
              role='navigation'
              aria-current={pathname === '/a-propos' ? 'page' : ''}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
