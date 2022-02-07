import './project.css';
// import Blog from '../../images/blog.jpg'

function Project({ name, image, description, demoLink, repoLink }) {
  return (
    <div className='project'>

      <h4 className='project-name'>{name}</h4>

      <img className='project-image' src={image} alt='' />

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
