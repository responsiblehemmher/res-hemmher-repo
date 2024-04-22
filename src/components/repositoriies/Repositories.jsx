import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './repositories.css'; 

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10; 

  useEffect(() => {
    fetch(`https://api.github.com/users/Omnibuus/repos?page=${page}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1); 
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">My GitHub Repositories</h1>
      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id}>
            <Link className="repo-link" to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="button"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Repositories;
