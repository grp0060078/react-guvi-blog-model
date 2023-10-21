import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import All from './components/All';
import './components/App.css'

function App() {
  const padding ={
    padding:5
  }
  return (
    <div className='container'>
    <Router>
      <nav>
        <ul>
      <Link to='/'style={padding}>All</Link>
        <Link to='/fullStack' style={padding}>FullStack</Link>
        <Link to='/dataScience'style={padding}>DataScience</Link>
        <Link to='/cybersecurity'style={padding}>CyberSecurity</Link>
       <Link to='/career'style={padding}>Career</Link>
       </ul>
       </nav>
      
      <Routes>
        <Route path="/"  element={<All/>} />
        <Route path="/fullStack"  element={<FullStack/>} />
        <Route path="/dataScience"  element={<DataScience/>} />
        <Route path="/cyberSecurity"  element={<CyberSecurity/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
