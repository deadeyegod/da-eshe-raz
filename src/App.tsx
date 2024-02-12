
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LetterContent from './components/LetterContent';
import SilentGame from './pages/silent_game/SilentGame';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="background"></div>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/letter-content"  element={<LetterContent />} />
      <Route path="/silent_game" element={<SilentGame />} />
        </Routes>
        
    </Router>
    
  );
}

export default App as React.FC;
