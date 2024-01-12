import React, { useEffect, useState } from 'react';
import GenderBlock from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/GenderBlock';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';

import MaleImage from '@/assets/images/png/genders/male.png';
import FemaleImage from '@/assets/images/png/genders/female.png';
import OtherImage from '@/assets/images/png/genders/other.png';
import {
  Container,
  Options,
  Select,
} from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/StyledComponents';

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
const GenderSelect = ({ onValidateField, number, value, fieldName }: Props) => {
  const [fieldState, setFieldState] = useState('text');
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
    <Container>
      <div>
        <FieldNumber state={fieldState} text={number} />
      </div>

      <Select>
        <h4>{fieldName}</h4>
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
      </Select>
    </Container>
  );
};

export default GenderSelect;
