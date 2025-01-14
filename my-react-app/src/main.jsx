import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router"
import Error from './pages/Error.jsx'
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import About from './pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logement' element={<HousingSheet />}/>
        <Route path='/a-propos' element={<About />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
