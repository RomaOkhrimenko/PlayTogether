'use client';

import { motion } from 'framer-motion';
import styles from './index.module.scss';

const AnimationWall = () => {
  return (
    <div className={styles.wall}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.3, ease: 'linear' }}
        className={styles.bg_green}
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.3, ease: 'easeIn' }}
        className={styles.bg_main}
      ></motion.div>
    </div>
  );
};

export default AnimationWall;
