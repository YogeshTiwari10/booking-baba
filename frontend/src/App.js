import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='*' element={<Error />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
