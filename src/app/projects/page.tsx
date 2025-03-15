import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  stack: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Brain Out - Cards',
      description: 'A gauntlet of card puzzles that involve interactions with cards. Players have to complete tasks like clicking on the highest valued card, or move a bunch of cards into a box, etc. There are currently 10 levels.',
      stack: 'Built with HTML, CSS and JavaScript.',
      image: '/projects/brain-out.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/siewla/brainout-cards',
        live: 'https://siewla.github.io/brainout-cards/'
      }
    },
    {
      title: 'Ideagram',
      description: 'This application acts as a visual discovery engine for finding ideas like countries, recipes, home and style inspiration, and many more.',
      stack: 'A full Stack application with Express JS (Node JS) and Template Engine (EJS).',
      image: '/projects/ideagram.png',
      technologies: ['Node.js', 'Express', 'EJS', 'MongoDB'],
      links: {
        github: 'https://github.com/siewla/ideagram'
      }
    },
    {
      title: 'PinApps',
      description: 'This application serves to help its users organise and share the apps they commonly use.',
      stack: 'A full Stack application using MERN (MongoDB, React, Express and Node) Stack.',
      image: '/projects/pinapps.png',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      links: {
        github: 'https://github.com/siewla/pinapps'
      }
    },
    {
      title: 'Sweet Accountant',
      description: 'This application is a financial management app. This app also has charts and graphs which are extremely helpful in visualizing your expenditure against your income.',
      stack: 'A full Stack application using NERDS (Node, Express, React, Database using SQL) stack.',
      image: '/projects/sweet-accountant.png',
      technologies: ['Node.js', 'Express', 'React', 'PostgreSQL'],
      links: {
        github: 'https://github.com/siewla/sweet-accountant-frontend'
      }
    },
    {
      title: 'Rock, Paper, Scissors, Lizard, Spock',
      description: 'The classic rock, paper, scissors games including the variation of lizard and Spock.',
      stack: 'Built with HTML, CSS and JavaScript.',
      image: '/projects/rpsls.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/siewla/mini-projects/tree/master/rock-paper-scissors-lizard-spock',
        live: 'https://siewla.github.io/mini-projects/rock-paper-scissors-lizard-spock/'
      }
    }
  ];

  return (
    <Layout>
      <div className="container">
        <h1 className="heading">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card"
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Source Code"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 