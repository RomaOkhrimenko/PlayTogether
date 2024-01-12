import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 35px 99px;
  align-items: center;
  margin-bottom: 35px;

  @media (max-width: 994px) {
    grid-gap: 25px 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-right: 30px;
  }
`;
