import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Combat from './pages/Combat';
import NotFound from './pages/404.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/combate' element={<Combat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
