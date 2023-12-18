import styles from './index.module.scss';

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
  <div
   className={`${styles.platform} ${active ? styles.active : ''}`}
   onClick={() => handleSelectPlatform(id)}
  >
   <SvgComponent />

   <h3>{name}</h3>
  </div>
 );
};

export default PlatformBlock;
