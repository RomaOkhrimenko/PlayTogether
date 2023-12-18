import React from 'react';
import styles from './index.module.scss';
import { StaticImageData } from 'next/image';

import { FaTrash } from 'react-icons/fa';

type Props = {
 image: StaticImageData;
 onRemoveSavedGame: (arg1: string) => void;
 id: string;
};

const GameBLock = ({ image, onRemoveSavedGame, id }: Props) => {
 return (
  <div className={styles.gameBlock}>
   <img src={image.src} alt={'Game'} />
   <div
    className={styles.gameBlock_delete}
    onClick={() => onRemoveSavedGame(id)}
   >
    <FaTrash size={24} color={'#fff'} />
   </div>
  </div>
 );
};

export default GameBLock;
