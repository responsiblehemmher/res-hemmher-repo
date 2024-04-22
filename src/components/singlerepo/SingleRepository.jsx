// src/SingleRepository.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleRepository = () => {
  const { repoId } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
        setRepo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repository:', error);
        setLoading(false);
      }
    };

    fetchRepo();
  }, [repoId]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Repository Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold">{repo.name}</h2>
          <p>{repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks: {repo.forks_count}</p>
          <p>URL: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></p>
        </div>
      )}
    </div>
  );
};

export default SingleRepository;
