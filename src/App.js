import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import './App.css';

import { Demo } from './pages/Demo';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/demo" element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
