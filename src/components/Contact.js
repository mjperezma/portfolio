import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet/components/Contact.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import icon from '../images/icon-me.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/skills/github.png';

const Contact = () => {
  return (
    <div className='container__contact'>
      <div className='container__contact--color'>
        <p className='container__contact--text'>contacto</p>
        <img src={icon} alt='icon-mjperezma' className='container__contact--icon' />
        <section className='menu__btn'>
          <Link to='/' className='link'>
            <div className='btn--contact'>
              <p className='btn__text'>página principal</p>
              <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </div>
          </Link>
          <Link to='/about' className='link'>
            <div className='btn--contact'>
              <p className='btn__contact'>acerca de mi</p>
              <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </div>
          </Link>
          <Link to='/projects' className='link'>
            <div className='btn--contact'>
              <p className='btn__text'>proyectos</p>
              <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </div>
          </Link>
        </section>
      </div>
      <div className='media'>
        <h3 className='media__title'>Si tienes cualquier tipo de duda, puedes contactar conmigo en los enlaces que te dejo a continuación.</h3>
        <h3>María José Pérez Maeso</h3>
        <h4>Desarrolladora FrontEnd</h4>
        <a className='media__link' href='mailto:mariajose1907@gmail.com'>
          mariajose1907@gmail.com
        </a>
        <section className='media__section'>
          <a className='media__link' href='https://github.com/mjperezma' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt='icon-github' className='media__section--icon' />
          </a>
          <a className='media__link' href='https://www.linkedin.com/in/mariajoseperezmaeso/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='icon-linkedin' className='media__section--icon' />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
