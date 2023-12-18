import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import GenderBlock from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/GenderBlock';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';

import MaleImage from '@/assets/images/png/genders/male.png';
import FemaleImage from '@/assets/images/png/genders/female.png';
import OtherImage from '@/assets/images/png/genders/other.png';

type Props = {
 register: any;
 fieldName: string;
 error: any;
 inputType: string;
 number: string;
 value: string;
 onValidateField: (arg1: number | null) => string;
};

const genders = [
 { id: 1, image: MaleImage },
 { id: 2, image: FemaleImage },
 { id: 3, image: OtherImage },
];
const GenderSelect = ({
 onValidateField,
 number,
 value,
 fieldName,
 error,
}: Props) => {
 const [fieldState, setFieldState] = useState('text');
 const [chosenGender, setChosenGender] = useState<null | number>(null);

 useEffect(() => {
  if (onValidateField) {
   setFieldState(onValidateField(chosenGender));
  }
 }, [value, chosenGender]);

 const onSelectGender = (id: number) => {
  setChosenGender(id);
 };

 console.log('error', error);

 return (
  <div className={styles.genderSelect_container}>
   <div className={styles.genderSelect_number}>
    <FieldNumber state={fieldState} text={number} />
   </div>

   <div className={styles.genderSelect}>
    <h4>{fieldName}</h4>
    <div className={styles.genderSelect_options}>
     {genders.map(({ id, image }) => (
      <GenderBlock
       key={id}
       image={image}
       id={id}
       active={chosenGender === id}
       onSelectGender={onSelectGender}
      />
     ))}
    </div>
   </div>
  </div>
 );
};

export default GenderSelect;
