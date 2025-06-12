import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import BottomFooter from './components/BottomFooter';
import HeaderTwo from './components/HeaderTwo';

function App() {

  return (
  <BrowserRouter>
  <HeaderTwo/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <BottomFooter/>
    </BrowserRouter>
  )
}

export default App
