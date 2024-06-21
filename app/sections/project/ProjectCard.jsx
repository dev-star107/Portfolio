import React, { useState, useEffect, useRef } from 'react';


const ProjectCard = ({ thumbnail, title, description, techStack, srcURL, rotation }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const contentRef = React.useRef(null);
  
    useEffect(() => {
      if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
        setIsTruncated(true);
      }
    }, []);
  
    return (
      <div className="project-card text-gray-800 select-none" style={{ '--rotation': `${rotation}deg` }}>
        <div className="projects-header">
          <img
            className="card-img-top img-fluid"
            style={{ height: '200px', objectFit: 'cover' }}
            src={thumbnail}
            alt="Card image cap"
          />
        </div>
        <h5 className="card-title mt-3">{title}</h5>
        <div ref={contentRef} className={`content ${isTruncated ? 'truncated' : ''}`}>
          {description}
        </div>
        <div className="technologies">
          Tech Stack:{' '}
          {techStack.map((tech, index) => (
            <span key={index} className="stack-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-buttons">
          <a
            href="https://github.com/dev-star107"
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn"
            style={{
              float: 'right',
              color: '#fff',
              backgroundColor: '#68d372',
              padding: '.375rem .75rem',
              borderRadius: '.25rem',
            }}
          >
            <i className="fa-regular fa-file-code"></i>Source Code
          </a>
          <a
            href={srcURL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn"
            style={{
              float: 'right',
              color: '#fff',
              marginRight: 4,
              backgroundColor: '#68d372',
              padding: '.375rem .75rem',
              borderRadius: '.25rem',
            }}
          >
            <i className="fa-solid fa-display ml-2"></i>View Demo
          </a>
        </div>
      </div>
    );
  };

export default ProjectCard;
