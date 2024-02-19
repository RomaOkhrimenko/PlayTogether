import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  theme: 'primary' | 'outline';
  isDisabled: boolean;
}>`
  padding: 20px 40px;
  font-size: 16px;
  color: ${({ theme }) => (theme === 'outline' ? '#fff' : '#1e1e1e')};
  font-weight: 600;
  line-height: 21px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'primary' ? '#00f580' : theme === 'outline' ? 'transparent' : ''};
  box-shadow: 0 4px 15px 0 rgba(108, 108, 108, 0.15);
  border: ${({ theme }) =>
    theme === 'outline' ? '1px solid #00f580' : '1px solid transparent'};
  transition:
    box-shadow 0.3s,
    background-color 0.3s;

  &:hover {
    box-shadow: 0 0 15px #00f580;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: var(--gray-color) !important;
      pointer-events: none;
    `};
`;
