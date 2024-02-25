import React from 'react';
import { GenderBlock } from '@/components/templates/settings/gender-select/gender-block';

import MaleImage from '@/assets/images/png/genders/male.png';
import FemaleImage from '@/assets/images/png/genders/female.png';
import OtherImage from '@/assets/images/png/genders/other.png';
import { Container } from './StyledComponents';
import { Gender } from '@/components/templates/settings/gender-select/types';

type Props = {
  value: Gender['id'];
  onChangeGender: (arg: Gender['id']) => void;
};

const genders: Gender[] = [
  { id: 1, image: MaleImage },
  { id: 2, image: FemaleImage },
  { id: 3, image: OtherImage },
];
const GenderSelect = ({ value = 3, onChangeGender }: Props) => {
  const onSelectGender = (id: number) => {
    onChangeGender(id);
  };

  return (
    <Container>
      {genders.map(({ id, image }) => (
        <GenderBlock
          key={id}
          image={image}
          id={id}
          active={value === id}
          onSelectGender={onSelectGender}
        />
      ))}
    </Container>
  );
};

export { GenderSelect };
