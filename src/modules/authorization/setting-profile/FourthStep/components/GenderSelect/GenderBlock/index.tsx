import React from 'react';
import styles from './index.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
 image: StaticImageData;
 active: boolean;
 id: number;
 onSelectGender: (arg1: number) => void;
};

const GenderBlock = ({ image, active, id, onSelectGender }: Props) => {
 return (
  <div
   onClick={() => onSelectGender(id)}
   className={`${styles.genderBlock} ${active ? styles.active : ''}`}
  >
   <Image src={image} alt="Gender Image" />
  </div>
 );
};

export default GenderBlock;
