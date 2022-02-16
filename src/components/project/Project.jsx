import './project.css';

function Project({ name, image, description, demoLink, repoLink, tech }) {
  return (
    <div className='project'>

      <img className='project-image' src={image} alt='' />

      <h4 className='project-title'>{name}</h4>

      <div className="project-tech">
        {/* <p className='tech-desc' >Technology used:</p> */}
        {tech.map(t =>
          <a href='#skills'>
            <div className='tech-icon-wrapper' key={t} >
              <img className='tech-icon' src={t} alt={t} ></img>
            </div>
          </a>
        )
        }
      </div>

      <p className='project-description'>{description}</p>

      <div className="project-buttons">
        <a href={demoLink} target="_blank" rel='noreferrer'>
          <button>Live Demo</button>
        </a>
        <a href={repoLink} target="_blank" rel='noreferrer'>
          <button>Code Repository</button>
        </a>
      </div>

    </div>
  );
}

export default Project;
