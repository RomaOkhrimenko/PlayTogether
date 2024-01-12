import React from 'react';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import { StaticImageData } from 'next/image';
import {
  SelectGameBlockContainer,
  SelectGameBlockImage,
} from '@/components/ui/Modals/SelectGameModal/StyledComponents';

type Props = {
  image: StaticImageData;
  isChosen: boolean;
  onClick: (game: IGameType) => void;
  id: string;
};

const SelectGameBlock = ({ image, isChosen, onClick, id }: Props) => {
  return (
    <SelectGameBlockContainer
      onClick={() => onClick({ image, id })}
      active={isChosen}
    >
      <SelectGameBlockImage src={image} alt="Game block" />
    </SelectGameBlockContainer>
  );
};

export default SelectGameBlock;
