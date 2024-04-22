// src/Repositories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/responsiblehemmher/repos?page=${page}&per_page=10`);
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
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
      <h1 className="text-3xl font-bold mb-4">My GitHub Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button onClick={handlePrevPage} disabled={page === 1} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Previous Page
            </button>
            <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const response = await axios.get(`https://api.github.com/user/repos?page=${page}&per_page=10`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
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
      <h1 className="text-3xl font-bold mb-4">My GitHub Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button onClick={handlePrevPage} disabled={page === 1} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Previous Page
            </button>
            <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
 */
export default Repositories;
