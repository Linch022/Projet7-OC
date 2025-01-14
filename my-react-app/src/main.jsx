import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from "react-router"
import Error from './pages/Error.jsx'
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />}/>
        <Route path='/logement' element={<HousingSheet />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
