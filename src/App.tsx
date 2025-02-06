import './App.css';
import logo from './assets/webRockLogo.png';
import CapitalInicial from './pages/CapitalInicial/CapitalInicial.tsx';
import LegiaoUrbana from './pages/LegiaoUrbana/LegiaoUrbana.tsx';
import Paralamas from './pages/Paralamas/Paralamas.tsx';
import MainPage from './pages/mainPage.tsx';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navBar">
        <nav>
          <a href="/"><img src={logo} alt="Logo" /></a>
        </nav>
      <ul>
        <li>
          <button onClick={() => navigate('/Legiao')}>Legião Urbana</button>
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
        <Route path="/" element={<MainPage />} />
        <Route path="/Legiao" element={<LegiaoUrbana />} />
        <Route path="/Capital" element={<CapitalInicial />} />
        <Route path="/Paralamas" element={<Paralamas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
