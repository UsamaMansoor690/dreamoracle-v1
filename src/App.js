import { Route, Routes } from 'react-router-dom';
import './App.css';
import Likes from './components/likes/Likes';
import History from './components/cameraRoll/History';
import Generate from './components/generate/Generate';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Pricing from './components/pricing/Pricing';
import BottomTab from './components/bottomTab/BottomTab';

function App() {
  return (
    <div className='main__div'>
      <Navbar />

      <div className='routes__container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/history' element={<History />} />
          <Route path='/likes' element={<Likes />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>

      <div className='footer'>
        <BottomTab />
      </div>
    </div>
  );
}

export default App;
