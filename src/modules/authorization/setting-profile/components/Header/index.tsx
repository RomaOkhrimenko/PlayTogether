import { StaticImageData } from 'next/image';
import {
  Header,
  HeaderImage,
} from '@/modules/authorization/setting-profile/components/Header/StyledComponents';

type Props = {
  image: StaticImageData;
  title: string;
};

const SettingProfileHeader = ({ image, title }: Props) => {
  return (
    <Header>
      <HeaderImage src={image} alt={title} />
      <h2>{title}</h2>
    </Header>
  );
};

export default SettingProfileHeader;
