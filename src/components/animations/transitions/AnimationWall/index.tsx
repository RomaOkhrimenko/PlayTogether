'use client';

import {
  BgGreen,
  BgMain,
  Wall,
} from '@/components/animations/transitions/AnimationWall/StyledComponents';

const AnimationWall = () => {
  return (
    <Wall>
      <BgGreen
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.3, ease: 'linear' }}
      />
      <BgMain
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.3, ease: 'easeIn' }}
      />
    </Wall>
  );
};

export default AnimationWall;
