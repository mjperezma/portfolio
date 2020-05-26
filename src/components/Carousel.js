import React from 'react';
import Slider from 'react-slick';
import '../stylesheet/components/Carousel.scss';
import react from '../images/skills/react.png';
import js from '../images/skills/js.png';
import css3 from '../images/skills/css3.png';
import html from '../images/skills/html5.png';
import sass from '../images/skills/sass.png';
import git from '../images/skills/git.png';
import slack from '../images/skills/slack.png';
import github from '../images/skills/github.png';
import trello from '../images/skills/trello.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className='container__carousel'>
      <h3 className='container__carousel--text'>Skills</h3>
      <Slider {...settings}>
        <div>
          <img src={html} alt='Html5' className='container__carousel--img' />
        </div>
        <div>
          <img src={css3} alt='Css3' className='container__carousel--img' />
        </div>
        <div>
          <img src={sass} alt='Sass' className='container__carousel--img' />
        </div>
        <div>
          <img src={js} alt='JS' className='container__carousel--img' />
        </div>
        <div>
          <img src={react} alt='React' className='container__carousel--img' />
        </div>
        <div>
          <img src={git} alt='Git' className='container__carousel--img' />
        </div>
        <div>
          <img src={github} alt='Github' className='container__carousel--img' />
        </div>
        <div>
          <img src={trello} alt='Trello' className='container__carousel--img' />
        </div>
        <div>
          <img src={slack} alt='Slack' className='container__carousel--img' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
