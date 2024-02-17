import styled, { css } from 'styled-components';
import Image from 'next/image';

export const SelectGameModalWrapper = styled.div`
  position: relative;
  padding: 4.5rem 3.5rem;
  max-width: 1200px;

  border-radius: 15px;
  border: 0.5px solid var(--green-color);
  background: var(--dark-color);
  box-shadow:
    0 0 25px 0 rgba(0, 0, 0, 0.25),
    0 0 15px 0 rgba(20, 255, 72, 0.15) inset;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const SelectGameModalTitle = styled.h4`
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 800;
  line-height: 28px;
  margin-bottom: 25px;

  @media (max-width: 554px) {
    font-size: 1.8rem;
    line-height: 25px;
  }
`;

export const SelectGameModalSearch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 15px;
  margin-bottom: 40px;
  background-color: var(--color-white);

  svg {
    color: var(--gray-color);
    margin-right: 10px;
  }

  input {
    width: 100%;
    color: var(--dark-color);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 21px;
  }
`;

export const SelectGameModalGamesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px 15px;
  max-height: 40vh;
  overflow-y: auto;
  margin-bottom: 40px;
  padding-top: 15px;

  @media (max-width: 554px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SelectGameModalButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    color: var(--dark-color);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;

    border-radius: 10px;
    background: var(--green-color);
    /* Тень */
    box-shadow: 0 4px 15px 0 rgba(108, 108, 108, 0.15);

    padding: 2rem 4rem;
  }
`;

export const SelectGameBlockContainer = styled.div<{ active: boolean }>`
  border-radius: 10px;
  border: 1px solid transparent;
  transition:
    border 0.3s,
    transform 0.3s;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border: 1px solid var(--green-color);
      transform: translateY(-10px);
    `};
`;

export const SelectGameBlockImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
