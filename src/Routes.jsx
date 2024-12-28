import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './components/Menu';
import './App.css'

function AppRoutes() {
  return (
    <Router> 
      <Menu />
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobremim" element={<SobreMim />} /> 
        <Route path="*" element={<h1>Página não encontrada :/</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;