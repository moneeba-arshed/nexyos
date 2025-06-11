import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import BottomFooter from './components/BottomFooter';

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BottomFooter/>
    </BrowserRouter>
  )
}

export default App
