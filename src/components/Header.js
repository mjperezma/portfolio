import React from 'react';
import '../stylesheet/components/Header.scss';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import user from '../images/smart.png';
import rocket from '../images/rocket.png';
import contact from '../images/email.png';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='menu'>
          <Link className='menu__list' to='/Contact'>
            <img src={contact} alt='contact' className='menu__list--icon--envelope' />
            <li className='menu__list--text'>
              Contacto <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </li>
          </Link>
          <Link className='menu__list' to='/projects'>
            <img src={rocket} alt='rocket' className='menu__list--icon--rocket' />
            <li className='menu__list--text'>
              Proyectos <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </li>
          </Link>
          <Link className='menu__list' to='/about'>
            <img src={user} alt='user' className='menu__list--icon' />
            <li className='menu__list--text'>
              Acerca de mi <FontAwesomeIcon icon={faArrowRight} className='menu__list--icon--right' />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
