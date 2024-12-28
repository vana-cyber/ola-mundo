import PaginaPadrao from 'components/PaginaPadrao';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './components/Menu';
import './App.css'
import Rodape from 'components/Rodape';

function AppRoutes() {
  return (
    <Router> 
      <Menu />
      <Routes> 

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} /> 
          <Route path="sobremim" element={<SobreMim />} />
        </Route> 

        <Route path="*" element={<h1>Página não encontrada :/</h1>} />
      </Routes>

      <Rodape />
    </Router>
  );
}

export default AppRoutes;