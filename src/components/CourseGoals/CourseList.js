import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ items }) => {
  return (
    <ul className='goal-list'>
      {items.map(item => (
        <li key={item.id} className="goal-item">
          <CourseItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
