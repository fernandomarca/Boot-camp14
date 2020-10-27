import React, { useState } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects">
        <ul>
          {projects.map(project => (
            <li key={project}>
              {project}
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddProject} >Add Project</button>
      </Header>
    </>
  )
}

export default App;