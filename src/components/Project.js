import React from 'react';
import code from '../images/projects/code.png';
import web from '../images/projects/web.png';
import '../stylesheet/components/Projects.scss';
import Tags from '../components/Tags';

const Project = (props) => {
  let proyectos = props.projects.projects;
  console.log(proyectos);
  const listProject = proyectos.map((project) => {
    console.log(project.tags);
    return (
      <article className='section__container--article' key={project.id}>
        <h4 className='section__container--name'>{project.name}</h4>
        <section>
          <Tags tags={project.tags} />
        </section>

        <img alt='Foto proyecto' className='section__container--img' src={project.img} />
        <div className='section__container--div'>
          <a target='blank' href={project.code} className='section__container--link' title='Ir al código'>
            <img className='section__container--icon' src={code} alt='Código' />
          </a>
          <a target='blank' href={project.url} className='article__container--link' title='Ir a la web'>
            <img className='section__container--icon' src={web} alt='Web' />
          </a>
        </div>
      </article>
    );
  });
  return (
    <>
      <section className='section__container'>{listProject}</section>
      <h2 className='text'> Continuará... </h2>
    </>
  );
};

export default Project;
