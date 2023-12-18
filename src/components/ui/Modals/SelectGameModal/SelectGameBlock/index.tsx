import React from 'react';
import styles from './index.module.scss';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import Image, { StaticImageData } from 'next/image';

type Props = {
 image: StaticImageData;
 isChosen: boolean;
 onClick: (game: IGameType) => void;
 id: string;
};

const SelectGameBlock = ({ image, isChosen, onClick, id }: Props) => {
 console.log(image);
 return (
  <div
   onClick={() => onClick({ image, id })}
   className={`${styles.selectGameBlock} ${isChosen ? styles.active : ''}`}
  >
   <Image className={styles.selectGameBlock_img} src={image} alt="Game block" />
  </div>
 );
};

export default SelectGameBlock;
