import React from 'react';
import '../stylesheet/components/Tags.scss';

const Tags = (props) => {
  console.log(props);
  const tags = props.tags.map((item, index) => {
    return (
      <li className='tag__list--item' key={index}>
        {item}
      </li>
    );
  });
  return <ul className='tag__list'>{tags}</ul>;
};

export default Tags;
