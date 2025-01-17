import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Error from './pages/Error.jsx';
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import About from './pages/About.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import './styles/app.scss';
import Body from './layout/Body.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route element={<Body />}>
          <Route path='/' element={<Home />} />
          <Route path='/logement' element={<HousingSheet />} />{' '}
          {/*Ajout d'un param dans le lien pour aller au logement voulu */}
          <Route path='/a-propos' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
