import { Genre } from '@/modules/authorization/setting-profile/SecondStep/StyledComponents';

type Props = {
  SvgComponent: () => JSX.Element;
  name: string;
  active?: boolean;
  handleSelectPlatform: (arg0: string) => void;
  id: string;
};
const GenreBlock = ({
  SvgComponent,
  name,
  active,
  handleSelectPlatform,
  id,
}: Props) => {
  return (
    <Genre active={active} onClick={() => handleSelectPlatform(id)}>
      <SvgComponent />

      <h3>{name}</h3>
    </Genre>
  );
};

export default GenreBlock;
