import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Index from './Pages/Index/Index';
import New from './Pages/New/New';
import Show from './Pages/Show/Show';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
