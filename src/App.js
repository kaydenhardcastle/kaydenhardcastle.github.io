import React from 'react';
import { 
  Route, 
  Routes, 
  BrowserRouter as Router, 
} from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';

const Landing = () => <Projects />;



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Landing />}
          />
          <Route 
            path="/projects" 
            element={<Projects />}
          />
          <Route 
            path="/contact" 
            element={<p>contact</p>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
