import styles from './index.module.scss';
import {
 ActionGenre,
 AdventureGenre,
 FightGenre,
 RpgGenre,
} from '@/assets/images/svg';
import { useState } from 'react';
import GenreBlock from '@/modules/authorization/setting-profile/SecondStep/Genres/GenreBlock';
import { ACTION, ADVENTURE, FIGHTING, RPG } from '@/assets/constants/genres';

const platforms = [
 { id: ACTION, name: 'Action', svg: ActionGenre },
 { id: ADVENTURE, name: 'Adventure', svg: AdventureGenre },
 { id: FIGHTING, name: 'Fighting', svg: FightGenre },
 { id: RPG, name: 'Rpg', svg: RpgGenre },
];

type Props = {
 setGenres: (genres: string[]) => void;
 savedGenres: string[];
};

const Genres = ({ setGenres, savedGenres }: Props) => {
 const [selectedPlatforms, setSelectedPlatforms] =
  useState<string[]>(savedGenres);

 const handleSelectedPlatforms = (platformId: string) => {
  const platformIndex = selectedPlatforms.findIndex((id) => id === platformId);

  if (platformIndex !== -1) {
   const newSelectedPlatforms = selectedPlatforms.filter(
    (id) => id !== platformId,
   );

   setSelectedPlatforms((prev) => newSelectedPlatforms);
   setGenres(newSelectedPlatforms);
  } else {
   const selectedPlatformsCopy = [...selectedPlatforms];
   selectedPlatformsCopy.push(platformId);
   setSelectedPlatforms(selectedPlatformsCopy);
   setGenres(selectedPlatformsCopy);
  }
 };
 return (
  <div className={styles.platforms}>
   {platforms.map((platform) => (
    <GenreBlock
     key={platform.id}
     id={platform.id}
     SvgComponent={platform.svg}
     handleSelectPlatform={handleSelectedPlatforms}
     name={platform.name}
     active={selectedPlatforms.includes(platform.id)}
    />
   ))}
  </div>
 );
};

export default Genres;
