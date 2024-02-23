import React, { useEffect, useState } from 'react';
import GenderBlock from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/GenderBlock';

import MaleImage from '@/assets/images/png/genders/male.png';
import FemaleImage from '@/assets/images/png/genders/female.png';
import OtherImage from '@/assets/images/png/genders/other.png';
import { Options } from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/StyledComponents';
import SettingProfileElementLayout from '@/modules/authorization/setting-profile/FourthStep/layout/SettingProfileElementLayout';
import { FieldNumberState } from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber/types';

type Props = {
  register: any;
  fieldName: string;
  error: any;
  inputType: string;
  number: string;
  value: string;
  onValidateField: (arg1: number | null) => FieldNumberState;
};

const genders = [
  { id: 1, image: MaleImage },
  { id: 2, image: FemaleImage },
  { id: 3, image: OtherImage },
];
const GenderSelect = ({ onValidateField, number, value, fieldName }: Props) => {
  const [fieldState, setFieldState] = useState<FieldNumberState>('text');
  const [chosenGender, setChosenGender] = useState<null | number>(3);

  useEffect(() => {
    if (onValidateField) {
      setFieldState(onValidateField(chosenGender));
    }
  }, [value, chosenGender]);

  const onSelectGender = (id: number) => {
    setChosenGender(id);
  };

  return (
    <SettingProfileElementLayout
      fieldNumber={number}
      fieldState={fieldState}
      fieldName={fieldName}
    >
      <Options>
        {genders.map(({ id, image }) => (
          <GenderBlock
            key={id}
            image={image}
            id={id}
            active={chosenGender === id}
            onSelectGender={onSelectGender}
          />
        ))}
      </Options>
    </SettingProfileElementLayout>
  );
};

export default GenderSelect;
