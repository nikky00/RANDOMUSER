import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home  from './pages/Home';
import User from './pages/User';
import About from './pages/About'



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user'  element={<User/>}/>
      <Route path='/about' element={<About/>}/>  
      <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    

   </>
  );
}

export default App;
