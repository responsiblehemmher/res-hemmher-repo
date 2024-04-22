import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/responsiblehemmher/${repoName}`)
      .then(response => response.json())
      .then(data => setRepo(data))
      .catch(error => console.error('Error fetching repo details:', error));
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{repo.name}</h2>
      <p>Description: {repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Stars: {repo.stargazers_count}</p>
    </div>
  );
};

export default RepoDetails;
