import styles from './index.module.scss';

type Props = {
  SvgComponent: () => JSX.Element,
  name: string,
  active?: boolean,
  handleSelectPlatform: (string) => void
  id: string
}
const GenreBlock = ({ SvgComponent, name, active, handleSelectPlatform, id }: Props) => {
  return (
    <div className={`${styles.genre} ${active ? styles.active : ''}`} onClick={() => handleSelectPlatform(id)}>
      <SvgComponent />

      <h3>{name}</h3>
    </div>
  );
};

export default GenreBlock;