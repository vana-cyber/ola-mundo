import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import SobreMim from './components/SobreMim';
import './App.css'

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobremim" element={<SobreMim />} /> 
        <Route path="*" element={<h1>Página não encontrada :/</h1>} />
      </Routes>
    </Router>
  );
}

export default App;