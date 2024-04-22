import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10; // Number of repositories per page

  useEffect(() => {
    fetch(`https://api.github.com/users/responsiblehemmher/repos?page=${page}&per_page=${perPage}`)
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
    <div>
      <h1 className="text-2xl font-bold mb-4">My GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Repositories;
