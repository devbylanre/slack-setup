import React from 'react';
import Card from '../components/Card';

const Active = () => {
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
        <polygon
          fill='#CFD8DC'
          points='39.4,23 38.6,19 26,21.6 26,8 22,8 22,20.3 8.1,11.3 5.9,14.7 21.1,24.5 9.4,39.8 12.6,42.2 23.9,27.4 32.3,40.1 35.7,37.9 27.3,25.4'
        ></polygon>
        <circle
          fill='#3F51B5'
          cx='24'
          cy='24'
          r='7'
        ></circle>
        <g fill='#00BCD4'>
          <circle
            cx='24'
            cy='8'
            r='5'
          ></circle>
          <circle
            cx='39'
            cy='21'
            r='5'
          ></circle>
          <circle
            cx='7'
            cy='13'
            r='5'
          ></circle>
          <circle
            cx='11'
            cy='41'
            r='5'
          ></circle>
          <circle
            cx='34'
            cy='39'
            r='5'
          ></circle>
        </g>
      </svg>
      <h6>Active</h6>
    </Card>
  );
};

export default Active;
