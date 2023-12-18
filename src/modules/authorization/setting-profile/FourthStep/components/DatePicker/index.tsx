import React, { useState } from 'react';

import styles from './index.module.scss';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';

type Props = {
 number: string;
 value: string;
};

const StyledButton = {
 fontSize: 18,
 color: 'green',
};

const DobPicker = ({ number, value }: Props) => {
 const [state, setState] = useState('text');
 return (
  <div className={styles.datePicker_container}>
   <div className={styles.datePicker_number}>
    <FieldNumber state={state} text={number} />
   </div>

   <div className={styles.datePicker}></div>
  </div>
 );
};

export default DobPicker;
