import React from 'react';
import {Link} from 'react-router-dom';
import img from '../images/me.jpeg';
import '../stylesheet/components/About.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';

const About = () => {
  return (
    <>
      <div className='container__about'>
        <section className='container__about--section'>
          <div className='container'>
            <div className='container__line'></div>
            <h2 className='container__about--title'>Acerca de mi</h2>
          </div>
          <section className='container__about--div'>
            <img className='container__about--img' src={img} title='foto de María José' alt='foto de María José' />
            <div className='container__about--text'>
              <p>
                ¡Hola! Soy María José y soy desarrolladora Front-End junior. Me gradué en filología hispánica, pero ser un poco inquieta, y las ganas de seguir aprendiendo, me llevaron a reinventarme en la programación gracias a Adalab. <p className='about'> Mi experiencia laboral de atención al cliente, me ha ayudado a desarrollar una gran capacidad de adaptabilidad al cambio, tolerancia al estrés y empatía, así como un gran don de gentes.</p>
              </p>
              <p> En la actualidad, continúo ampliando conocimientos de la mano de Geekshubs. ¡Con mucha ilusión y ganas de aportar mi bagaje al sector tecnológico!</p>
            </div>
          </section>
        </section>
        <Carousel />
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
          <Link to='/projects' className='link'>
            <div className='btn'>
              <p className='btn__text'>proyectos</p>
              <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
