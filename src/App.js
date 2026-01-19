import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/pagenotfound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
