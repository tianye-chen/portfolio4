import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Attributions } from './Attributions';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attributions" element={<Attributions />} />
      </Routes>
    </Router>
  );
}