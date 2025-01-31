import { NavLink, useLocation } from 'react-router';
import logo from '../assets/LOGO.svg';

function Header() {
  const { pathname }  = useLocation();  

  return (
    <div className='header' role='banner'>
      { pathname === "/" ? 
        <h1>
        <img src={logo} className='header__title' alt='Kasa' />
      </h1> 
      : <img src={logo} className='header__title' alt='Kasa' />
      }
      <nav className='nav'>
        <ul className='nav__link-container'>
          <li>
            <NavLink
              to='/'
              className={
               ( {isActive}) => (isActive ? 'nav__link--active nav__link' : "nav__link")
              }
              role='navigation'
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/a-propos'
              className={
                ( {isActive}) => (isActive ? 'nav__link--active nav__link' : "nav__link")
               }
              role='navigation'
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
