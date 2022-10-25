import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Webside from './views/webside';
import Admin from './views/admin';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Webside />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<Webside />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
