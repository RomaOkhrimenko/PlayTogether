import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  step: number,
  stepCounts: number
}

const ProgressBar = ({ step, stepCounts }: Props) => {
  const [progressBarPercent, setProgressBarPercent] = useState(0);

  useEffect(() => {
    const percent = 100 / stepCounts * step;

    setProgressBarPercent(percent);
  });

  return (
    <div className={styles.progress_bar__container}>
      <div className={styles.progress_bar}>
        <motion.div initial={{ width: 0 }} animate={{ width: progressBarPercent + '%' }}
                    transition={{ duration: 0.5 }}
                    className={styles.progress_bar__fill} />
      </div>

      <div className={styles.progress_bar__step}>
        <span>Крок {step} з {stepCounts}</span>
        <svg width='20' height='10' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 5H19M19 5L15 1M19 5L15 9' stroke='#00F580' />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;