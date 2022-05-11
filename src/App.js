import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appointment' element={<Appoinment />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
