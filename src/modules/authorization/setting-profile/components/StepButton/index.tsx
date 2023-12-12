import styles from './index.module.scss';

type Props = {
  name: string,
  disable?: boolean
  onClick: () => void
  accent?: boolean
}
const StepButton = ({ name, disable, onClick, accent }: Props) => {
  return (
    <button onClick={onClick}
            className={`${styles.step_button} ${disable ? styles.disable : ''} ${accent ? styles.accent : ''}`}>
      {name}
    </button>
  );
};

export default StepButton;