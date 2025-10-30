import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cars from './pages/Car/Cars';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact /> } />

        {/* auth */}
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register /> } />

        {/* cars */}
        <Route path='/cars' element={<Cars /> } />
      </Routes>

      <Footer /> 
    </>
  )
}

export default App
