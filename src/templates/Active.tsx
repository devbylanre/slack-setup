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
        style={{ width: '20px', height: '20px' }}
      >
        <polygon
          fill='#FFC107'
          points='33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45'
        ></polygon>
      </svg>
      <h6 style={{ flex: '1 1 0%', fontSize: '1.3rem', fontWeight: 600 }}>
        Active
      </h6>
    </Card>
  );
};

export default Active;
