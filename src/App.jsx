import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Repositories from './components/repositoriies/Repositories';
import RepoDetails from './components/repodetails/RepoDetails';



function App() {
  return (
    <Router>
      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/repo/:repoName" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
