import { useState } from 'react';
import PlatformBlock from '@/modules/authorization/setting-profile/FirstStep/Platforms/PlatformBlock';
import ComputerSvg from '@/assets/images/svg/platforms/ComputerSvg';
import SmartPhoneSvg from '@/assets/images/svg/platforms/SmartphoneSvg';
import PlaystationSvg from '@/assets/images/svg/platforms/PlaystationSvg';
import Xbox from '@/assets/images/svg/platforms/Xbox';
import {
  COMPUTER,
  PLAYSTATION,
  SMARTPHONE,
  XBOX,
} from '@/assets/constants/platforms';
import { PlatformsWrapper } from '@/modules/authorization/setting-profile/FirstStep/StyledComponents';

const platforms = [
  { id: COMPUTER, name: 'Computer', svg: ComputerSvg },
  { id: SMARTPHONE, name: 'Smartphone', svg: SmartPhoneSvg },
  { id: PLAYSTATION, name: 'PlayStation', svg: PlaystationSvg },
  { id: XBOX, name: 'Xbox', svg: Xbox },
];

type Props = {
  setPlatforms: (platforms: string[]) => void;
  savedPlatforms: string[];
};

const Platforms = ({ setPlatforms, savedPlatforms }: Props) => {
  const [selectedPlatforms, setSelectedPlatforms] =
    useState<string[]>(savedPlatforms);

  const handleSelectedPlatforms = (platformId: string) => {
    const platformIndex = selectedPlatforms.findIndex(
      (id) => id === platformId,
    );

    if (platformIndex !== -1) {
      const newSelectedPlatforms = selectedPlatforms.filter(
        (id) => id !== platformId,
      );

      setSelectedPlatforms((prev) => newSelectedPlatforms);
      setPlatforms(newSelectedPlatforms);
    } else {
      const selectedPlatformsCopy = [...selectedPlatforms];
      selectedPlatformsCopy.push(platformId);
      setSelectedPlatforms(selectedPlatformsCopy);
      setPlatforms(selectedPlatformsCopy);
    }
  };
  return (
    <PlatformsWrapper>
      {platforms.map((platform) => (
        <PlatformBlock
          key={platform.id}
          id={platform.id}
          SvgComponent={platform.svg}
          handleSelectPlatform={handleSelectedPlatforms}
          name={platform.name}
          active={selectedPlatforms.includes(platform.id)}
        />
      ))}
    </PlatformsWrapper>
  );
};

export default Platforms;
