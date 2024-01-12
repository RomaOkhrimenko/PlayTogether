import styled, { css } from 'styled-components';

export const Button = styled.button<{ disabled?: boolean; accent?: boolean }>`
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.08px;
  padding: 20px 40px;
  color: var(--color-white);
  background: transparent;
  border: 1px solid var(--green-color);
  transition: background 0.3s;

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--gray-color) !important;
      pointer-events: none;
    `};

  ${({ accent }) =>
    accent &&
    css`
      background-color: var(--green-color);
      color: var(--dark-color);
      border: 1px solid transparent;
    `};
`;
