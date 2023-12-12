import styles from './index.module.scss';
import { useState } from 'react';

const SelectedGames = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  return (
    <div className={styles.platforms}>
      GAMES
    </div>
  );
};

export default SelectedGames;