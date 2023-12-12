import styles from './index.module.scss';
import Image from 'next/image';

type Props = {
  image: string,
  title: string
}

const SettingProfileHeader = ({ image, title }: Props) => {
  return (
    <div className={styles.setting_profile_header}>
      <Image className={styles.setting_profile_header__image} src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default SettingProfileHeader;