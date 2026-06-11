import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Bilirkisilik from './pages/Bilirkisilik';
import Egitim from './pages/Egitim';
import Hakkimda from './pages/Hakkimda';
import Iletisim from './pages/Iletisim';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bilirkisilik" element={<Bilirkisilik />} />
          <Route path="egitim" element={<Egitim />} />
          <Route path="hakkimda" element={<Hakkimda />} />
          <Route path="iletisim" element={<Iletisim />} />
        </Route>
      </Routes>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
