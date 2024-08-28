import React from 'react';
import Card from '../components/Card';

const Backlog = () => {
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
      >
        <path
          fill='#37474F'
          d='M34.9,29.1c-2.7-2.7-7.1-2.7-9.8,0l-4,4c-1.7,1.7-4.5,1.7-6.2,0c-1.7-1.7-1.7-4.5,0-6.2l4.5-4.5l-2.8-2.8 l-4.5,4.5c-3.3,3.3-3.3,8.6,0,11.8c3.3,3.3,8.6,3.3,11.8,0l4-4c1.2-1.1,3-1.1,4.2,0c1.1,1.2,1.1,3,0,4.2L27,41.2l2.8,2.8l5.1-5.1 C37.6,36.2,37.6,31.8,34.9,29.1z'
        ></path>
        <path
          fill='#0277BD'
          d='M16.1,22.9L16.1,22.9c-2.8-2.8-2.8-7.3,0-10l6.8-6.8c2.8-2.8,7.3-2.8,10,0l0,0c2.8,2.8,2.8,7.3,0,10 l-6.8,6.8C23.3,25.7,18.9,25.7,16.1,22.9z'
        ></path>
        <circle
          fill='#B3E5FC'
          cx='28'
          cy='11'
          r='4'
        ></circle>
      </svg>
      <h6>Backlog</h6>
    </Card>
  );
};

export default Backlog;
