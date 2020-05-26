import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import getApiData from './Services/Api';
import '../stylesheet/components/Projects.scss';
import Project from './Project';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getApiData().then((data) => {
      setProjects(data);
    });
  }, []);

  const listProject = projects.map((project, index) => {
    return (
      <div key={index}>
        <Project projects={project} />
      </div>
    );
  });

  return (
    <div className='container__list'>
      <section className='menu__btn'>
        <Link to='/' className='link'>
          <div className='btn'>
            <p className='btn__text'>página principal</p>
            <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
          </div>
        </Link>
        <Link to='/Contact' className='link'>
          <div className='btn'>
            <p className='btn__contact'>contacto</p>
            <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
          </div>
        </Link>
        <Link to='/about' className='link'>
          <div className='btn'>
            <p className='btn__text'>acerca de mi</p>
            <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
          </div>
        </Link>
      </section>
      <section>{listProject}</section>
    </div>
  );
};

export default ProjectsList;
