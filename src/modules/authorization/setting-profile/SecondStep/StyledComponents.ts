import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GenresWrapper = styled.div`
  margin-bottom: 100px;

  @media (max-width: 554px) {
    margin-bottom: 70px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding-bottom: 50px;

  @media (max-width: 1280px) {
    padding-right: 30px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 20px;
    justify-content: center;

    button {
      padding: 20px 80px;
      font-size: 22px;
    }
  }

  @media (max-width: 554px) {
    flex-direction: column-reverse;
    button {
      font-size: 18px;
      padding: 15px 80px;
    }
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Genre = styled.div<{ active?: boolean }>`
  width: 280px;
  height: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-color);
  border-radius: 5px;
  transition:
    transform 0.3s,
    border 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;

  @media (max-width: 1280px) {
    width: 240px;
    height: 150px;
  }

  ${({ active }) =>
    active &&
    css`
      transform: translateY(-10px);
      border: 1px solid var(--green-color);

      svg {
        color: var(--green-color);
      }

      h3 {
        color: var(--green-color);
      }
    `};

  &:hover {
    transform: translateY(-10px);

    svg {
      color: var(--green-color);
    }

    h3 {
      color: var(--green-color);
    }
  }

  svg {
    width: 70px;
    color: var(--color-white);
    transition: color 0.3s;
  }

  h3 {
    color: var(--color-white);
    font-size: 1.6rem;
    transition: color 0.3s;
  }
`;
