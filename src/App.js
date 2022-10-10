// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import Faqs from './pages/Faqs';
import Services from "./pages/Services";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>

  );
}

export default App;
