import React, { useState, useEffect } from 'react';

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

  async function handleAddProject() {

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Fernando"
    });
    // const project = response.data;
    // console.log(response.data)

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projects">
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </Header>
      <button type="button" onClick={handleAddProject} >Add Project</button>
    </>
  )
}

export default App;