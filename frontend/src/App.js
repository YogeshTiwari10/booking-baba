import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Navbar from './component/Navbar/Navbar';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import SingleMovies from './Pages/SingleMovies/SingleMovies';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/movie/:slug' element={<SingleMovies />} />
    <Route path='*' element={<Error />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
