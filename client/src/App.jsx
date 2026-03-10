import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatIsPE from './pages/WhatIsPE';
import WhyItMatters from './pages/WhyItMatters';
import Techniques from './pages/Techniques';
import Examples from './pages/Examples';
import BestPractices from './pages/BestPractices';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="what-is-pe" element={<WhatIsPE />} />
        <Route path="why-it-matters" element={<WhyItMatters />} />
        <Route path="techniques" element={<Techniques />} />
        <Route path="examples" element={<Examples />} />
        <Route path="best-practices" element={<BestPractices />} />
      </Route>
    </Routes>
  );
}

export default App;
