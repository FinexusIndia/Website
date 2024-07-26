import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/ContactUs/Contact';

function App() {
  return (
    <div className="bg-zinc-950 text-white font-serif overflow-x-hidden  ">
         <Navbar/>
         <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<Contact/>} />
         </Routes>
         
    </div>
  );
}

export default App;
