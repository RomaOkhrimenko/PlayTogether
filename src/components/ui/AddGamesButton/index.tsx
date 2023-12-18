import React from 'react';
import styles from './index.module.scss';


type Props = {
  onClick: () => void
}
const AddGamesButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.addGamesButton}>
      <span>Додати гру</span>
      <svg viewBox='0 0 27 27' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14 0V27' stroke='#00F580' strokeWidth='2' />
        <path d='M0 13.5L27 13.5' stroke='#00F580' strokeWidth='2' />
      </svg>
    </button>
  );
};

export default AddGamesButton;