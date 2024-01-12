import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Step = styled(motion.div)`
  width: 100%;
  height: calc(100% - 109px);
  padding-bottom: 100px;
  margin: 0 auto;
`;

export const GamesWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 10px 0;
  overflow-y: auto;
  max-height: 40vh;
  min-height: 40vh;

  @media (max-width: 1280px) {
    padding: 0 30px;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 554px) {
    flex-direction: column;
  }
`;

export const ButtonsNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 554px) {
    padding-top: 20px;
  }
`;

export const SelectedGamesContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SelectedGamesEmpty = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
`;

export const WarningTextContainer = styled.div`
  user-select: none;
  margin: 0 auto;
`;
export const WarningText = styled.span`
  height: 40vh;
  font-size: 20px;
  color: var(--gray-color);
`;

export const Game = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  max-height: 300px;

  &:hover {
    .delete-game__block {
      opacity: 1;
      pointer-events: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DeleteGameBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  cursor: pointer;
`;
