import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <h2>Project not found!</h2>;

  return (
    <div className='container'>
      <Link to='/projects'>← Back to Projects</Link>

      <section style={{ padding: '50px 0' }}>
        <h1>{project.title}</h1>

        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
          {project.description}
        </p>

        <h2>Project Details</h2>

        {project.longDesc.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ lineHeight: '1.8', marginBottom: '18px' }}>
            {paragraph}
          </p>
        ))}

        <h2 style={{ marginTop: '35px' }}>Technologies Used</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
          {project.tech.map((technology, index) => (
            <span key={index} className='tag'>
              {technology}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '35px' }}>
          <Link to='/projects' className='btn btn-secondary'>
            ← Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;