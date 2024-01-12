import React from 'react';
import { StaticImageData } from 'next/image';

import { FaTrash } from 'react-icons/fa';
import {
  DeleteGameBlock,
  Game,
} from '@/modules/authorization/setting-profile/ThirdStep/StyledComponents';

type Props = {
  image: StaticImageData;
  onRemoveSavedGame: (arg1: string) => void;
  id: string;
};

const GameBLock = ({ image, onRemoveSavedGame, id }: Props) => {
  return (
    <Game>
      <img src={image.src} alt={'Game'} />
      <DeleteGameBlock
        className={'delete-game__block'}
        onClick={() => onRemoveSavedGame(id)}
      >
        <FaTrash size={24} color={'#fff'} />
      </DeleteGameBlock>
    </Game>
  );
};

export default GameBLock;
