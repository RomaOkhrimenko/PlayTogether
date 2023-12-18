import React from 'react';
import NumberBackground from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber/NumberBackground';
import styles from './index.module.scss';

type Props = {
 state: string;
 text: string;
};
const FieldNumber = ({ state = 'number', text }: Props) => {
 const getBackgroundColor = () => {
  if (state === 'text') {
   return '#00F580';
  }

  if (state === 'success') {
   return '#1e1e1e';
  }

  return '';
 };
 const fieldNumberContent = () => {
  if (state === 'text') {
   return <span className={styles.text}>{text}</span>;
  }
  if (state === 'loading') {
   return <span>loading</span>;
  }
  if (state === 'success') {
   return (
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="19"
     height="19"
     viewBox="0 0 19 19"
     fill="none"
    >
     <path d="M1 12.4286L6.91304 17L18 1" stroke="#00F580" stroke-width="2" />
    </svg>
   );
  }
 };
 return (
  <div className={styles.fieldNumber}>
   <NumberBackground backgroundColor={getBackgroundColor()} />

   <div className={styles.fieldNumber_content}>{fieldNumberContent()}</div>
  </div>
 );
};

export default FieldNumber;
