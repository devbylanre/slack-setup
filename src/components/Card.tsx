import React from 'react';
import Styles from './card.module.css';

const Card = ({ children }: React.PropsWithChildren) => {
  return <div className={Styles.card}>{children}</div>;
};

export default Card;
