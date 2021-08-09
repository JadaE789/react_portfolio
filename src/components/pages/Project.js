import Project from '../Project';
import { projects } from '../../assets/data/portfolioSec';
import './Project.css';

export default function Projects() {
  return (
    <section className='w-full p-8 bg-gray-100'>
      <h2 className='py-4 text-center text-gray-600 text-2xl font-bold uppercase '>
        Projects
      </h2>
      <div className='grid lg:grid-cols-2 gap-8 py-8'>
        {projects.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>
    </section>
  );
}