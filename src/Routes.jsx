import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'paginas/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import NaoEncontrada from 'paginas/NaoEncontrada';

function AppRoutes() {
  return (
    <Router> 
      <Menu />
      <Routes> 

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} /> 
          <Route path="sobremim" element={<SobreMim />} />
        </Route> 

        <Route path='post/:id' element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </Router>
  );
}

export default AppRoutes;