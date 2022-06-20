import logo from './logo.svg';
import './App.css';
import { Redirect, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import {Navigate} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header/>
      <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            {/* <Navigate replace to="/" /> */}

      </Routes>
      <Footer/>
    </>
  
  );
}

export default App;
