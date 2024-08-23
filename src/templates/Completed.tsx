import React from 'react';
import Card from '../components/Card';

const Completed = () => {
  return (
    <Card>
      <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        version='1'
        viewBox='0 0 48 48'
        enable-background='new 0 0 48 48'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: '20px', height: '20px' }}
      >
        <path
          fill='#FF6F00'
          d='M38.7,11.9l-3.1,2.5c2.2,2.7,3.4,6.1,3.4,9.5c0,8.3-6.7,15-15,15c-0.9,0-1.9-0.1-2.8-0.3l-0.7,3.9 c1.2,0.2,2.4,0.3,3.5,0.3c10.5,0,19-8.5,19-19C43,19.6,41.5,15.3,38.7,11.9z'
        ></path>
        <polygon
          fill='#FF6F02'
          points='31,8 42.9,9.6 33.1,19.4'
        ></polygon>
        <path
          fill='#FF6F00'
          d='M24,5C13.5,5,5,13.5,5,24c0,4.6,1.6,9,4.6,12.4l3-2.6C10.3,31.1,9,27.6,9,24c0-8.3,6.7-15,15-15 c0.9,0,1.9,0.1,2.8,0.3l0.7-3.9C26.4,5.1,25.2,5,24,5z'
        ></path>
        <polygon
          fill='#FF6F02'
          points='17,40 5.1,38.4 14.9,28.6'
        ></polygon>
      </svg>
      <h6 style={{ flex: '1 1 0%', fontSize: '1.3rem', fontWeight: 600 }}>
        Completed
      </h6>
    </Card>
  );
};

export default Completed;
