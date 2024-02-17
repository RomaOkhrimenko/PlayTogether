import { Platform } from '@/modules/authorization/setting-profile/FirstStep/StyledComponents';
import { JSX } from 'react';

type Props = {
  SvgComponent: () => JSX.Element;
  name: string;
  active?: boolean;
  handleSelectPlatform: (id: string) => void;
  id: string;
};
const PlatformBlock = ({
  SvgComponent,
  name,
  active,
  handleSelectPlatform,
  id,
}: Props) => {
  return (
    <Platform active={active} onClick={() => handleSelectPlatform(id)}>
      <SvgComponent />

      <h3>{name}</h3>
    </Platform>
  );
};

export default PlatformBlock;
