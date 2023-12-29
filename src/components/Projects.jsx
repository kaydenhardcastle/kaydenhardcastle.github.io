import React from 'react';

import { projects } from '../projects';

import Project from './Project';

import './Projects.scss';

const Projects = () => {
  const modifiedProjects = projects.map((project) => ({
    ...project,
    date: new Date(project.date).toDateString(),
    sortDate: new Date(project.date),
  }));

  const websiteProjects = modifiedProjects.filter(entry => entry.type === "website").sort((a, b) => b.sortDate - a.sortDate);
  const codeProjects = modifiedProjects.filter(entry => entry.type === "code").sort((a, b) => b.sortDate - a.sortDate);
  const gameProjects = modifiedProjects.filter(entry => entry.type === "game").sort((a, b) => b.sortDate - a.sortDate);
  const youtubeProjects = modifiedProjects.filter(entry => entry.type === "youtube").sort((a, b) => b.sortDate - a.sortDate);
  const musicProjects = modifiedProjects.filter(entry => entry.type === "music").sort((a, b) => b.sortDate - a.sortDate);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <h2>Websites</h2>
      <div className="projects-list">
        {websiteProjects.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
      <h2>Music</h2>
      <div className="projects-list">
        {musicProjects.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
      <h2>YouTube Channels</h2>
      <div className="projects-list">
        {youtubeProjects.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
      <h2>Video Game Projects</h2>
      <div className="projects-list">
        {gameProjects.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
      <h2>Code Projects</h2>
      <div className="projects-list">
        {codeProjects.map((project) => (
          <Project key={project?.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
