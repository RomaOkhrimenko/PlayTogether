import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 37px;
  background-color: var(--dark-color);
  margin-top: 50px;
  margin-bottom: 25px;
`;

export const Step = styled.div`
  span {
    color: var(--gray-color);
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: 10px;
  }
`;

export const StepFill = styled(motion.div)`
  height: 15px;
  border-radius: 37px;
  background-color: var(--green-color);
  width: 0;
`;
