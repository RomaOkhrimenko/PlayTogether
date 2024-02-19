import React, { useEffect, useState } from 'react';
import { SearchSvg } from '@/assets/images/svg';
import { Button, Input } from '@/components/ui';

import SelectGameBlock from '@/components/ui/Modals/SelectGameModal/SelectGameBlock';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import {
  CloseButton,
  SelectGameModalButtonContainer,
  SelectGameModalGamesList,
  SelectGameModalSearch,
  SelectGameModalTitle,
  SelectGameModalWrapper,
} from '@/components/ui/Modals/SelectGameModal/StyledComponents';

type Props = {
  selectedGames: IGameType[];
  onSaveGames: (selectedGames: IGameType[]) => void;
  games: IGameType[];
  onCloseModal: () => void;
};

const SelectGameModal = ({
  selectedGames,
  onSaveGames,
  games,
  onCloseModal,
}: Props) => {
  const [search, setSearch] = useState<string>('');
  const [selectedUnSaveGames, setSelectedUnSaveGames] =
    useState<IGameType[]>(selectedGames);
  const onSave = () => {
    onSaveGames(selectedUnSaveGames);
  };

  const onSelectGame = (game: IGameType) => {
    const index = selectedUnSaveGames.findIndex((item) => item.id === game.id);

    if (index !== -1) {
      const newSelectedGames = selectedUnSaveGames.filter(
        (item) => item.id !== game.id
      );
      setSelectedUnSaveGames(newSelectedGames);
      return;
    }

    const newValue = [...selectedUnSaveGames, game];
    setSelectedUnSaveGames(newValue);
  };

  useEffect(() => {
    setSelectedUnSaveGames(selectedGames);
  }, [selectedGames]);

  return (
    <SelectGameModalWrapper>
      <CloseButton onClick={onCloseModal}>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3076 9.60052L29.3995 28.6924"
            stroke="#B9B9B9"
            strokeWidth="2"
          />
          <path
            d="M10 29.0918L29.0919 9.99991"
            stroke="#B9B9B9"
            strokeWidth="2"
          />
        </svg>
      </CloseButton>

      <div>
        <SelectGameModalTitle>
          Оберіть ігри для пошуку напарника
        </SelectGameModalTitle>
        <SelectGameModalSearch>
          <SearchSvg />
          <Input
            onChange={setSearch}
            value={search}
            placeholder={'Ведіть назву гри сюди'}
          />
        </SelectGameModalSearch>

        <SelectGameModalGamesList>
          {games?.map((game) => (
            <SelectGameBlock
              key={game.id}
              image={game.image}
              onClick={onSelectGame}
              id={game.id}
              isChosen={!!selectedUnSaveGames.find(({ id }) => id === game.id)}
            />
          ))}
        </SelectGameModalGamesList>
      </div>
      <SelectGameModalButtonContainer>
        <Button onClick={onSave} label={'Збергти'} />
      </SelectGameModalButtonContainer>
    </SelectGameModalWrapper>
  );
};

export default SelectGameModal;
