import './App.css';
import logo from './assets/webRockLogo.png';
import CapitalInicial from './pages/CapitalInicial/CapitalInicial';
import LegiaoUrbana from './pages/LegiaoUrbana/LegiaoUrbana';
import Paralamas from './pages/Paralamas/Paralamas';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <button onClick={() => navigate('/')}>Legião Urbana</button>
        </li>
        <li>
          <button onClick={() => navigate('/Capital')}>Capital Inicial</button>
        </li>
        <li>
          <button onClick={() => navigate('/Paralamas')}>Paralamas do Sucesso</button>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LegiaoUrbana />} />
        <Route path="/Capital" element={<CapitalInicial />} />
        <Route path="/Paralamas" element={<Paralamas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
