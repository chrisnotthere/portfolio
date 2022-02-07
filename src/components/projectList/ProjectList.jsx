import Project from '../project/Project';
import './projectlist.css';
import { projects } from '../../data'

function ProjectList() {
  return (
    <div className="list">

      <h1 className="list-title">Projects</h1>
      
      <div className="list-content">
        {projects.map((item) => (
          <Project
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            demoLink={item.demoLink}
            repoLink={item.repoLink}
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectList;
