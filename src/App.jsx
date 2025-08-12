import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/Register/Register.jsx';
import Recover from './pages/recover/Recover.jsx';
import Reset from './pages/reset/Reset';
import PadraoLayout from './components/layout/PadraoLayout.jsx';
import RotaPrivadaLayout from './components/layout/RotaPrivadaLayout.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<RotaPrivadaLayout/>}>
            <Route path='/register' element={<PadraoLayout>
              <Register/>
            </PadraoLayout>}/>
          </Route>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/recover" element={<Recover />} />
          <Route path="/reset" element={<Reset />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
