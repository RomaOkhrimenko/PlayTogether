import React from 'react';
import { StaticImageData } from 'next/image';
import {
  Gender,
  GenderImage,
} from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect/StyledComponents';

type Props = {
  image: StaticImageData;
  active: boolean;
  id: number;
  onSelectGender: (arg1: number) => void;
};

const GenderBlock = ({ image, active, id, onSelectGender }: Props) => {
  return (
    <Gender active={active} onClick={() => onSelectGender(id)}>
      <GenderImage src={image} alt="Gender Image" />
    </Gender>
  );
};

export default GenderBlock;
