import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wall = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100000000;
`;

export const BgGreen = styled(motion.div)`
  background-color: var(--green-color);
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const BgMain = styled(motion.div)`
  background-color: var(--main-bg);
  width: 100%;
  position: absolute;
  bottom: 0;
`;
