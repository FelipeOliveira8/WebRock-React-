import './App.css';
import LegiaoUrbana from './pages/LegiaoUrbana/LegiaoUrbana';
import logo from './assets/webRockLogo.png';

function App() {

  return (
    <>
      <div className="navBar">
        <img src={logo} alt="Logo" />
      </div>
      <LegiaoUrbana />
    </>
  )
}

export default App;
