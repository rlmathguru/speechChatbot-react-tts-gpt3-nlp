import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';
import ChatBot from './pages/ChatBot';
import { Demo } from './pages/Demo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatBot" element={<ChatBot />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
