import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.6);
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s;
    `};
`;