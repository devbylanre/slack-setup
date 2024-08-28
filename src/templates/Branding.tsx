import React from 'react';
import Card from '../components/Card';

const Branding = () => {
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
          fill='#00BCD4'
          d='M24,30c-3.3,0-6-2.7-6-6s2.7-6,6-6V5C13.5,5,5,13.5,5,24s8.5,19,19,19c4.4,0,8.5-1.5,11.8-4.1l-8-10.2 C26.7,29.5,25.4,30,24,30z'
        ></path>
        <path
          fill='#448AFF'
          d='M30,24h13c0-10.5-8.5-19-19-19v13C27.3,18,30,20.7,30,24z'
        ></path>
        <path
          fill='#3F51B5'
          d='M43,24H30c0,1.9-0.9,3.6-2.3,4.7l8,10.2C40.2,35.4,43,30,43,24z'
        ></path>
      </svg>
      <h6>Branding</h6>
    </Card>
  );
};

export default Branding;
