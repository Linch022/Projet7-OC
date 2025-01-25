import { Link } from 'react-router';

function Error() {
  return (
    <div className='error-page'>
      <h2 className='error-page__nmb'>404</h2>
      <p className='error-page__txt'>
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to='/' className='error-page__link'>
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default Error;
