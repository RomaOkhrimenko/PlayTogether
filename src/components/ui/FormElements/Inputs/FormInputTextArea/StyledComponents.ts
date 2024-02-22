import styled, { css } from 'styled-components';

export const InputTextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTextAreaTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > label {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.08px;
  }

  svg {
    color: var(--green-color);
    margin-right: 10px;
    font-size: 16px;
    line-height: 10px;
  }
`;

export const InputTextAreaContainer = styled.div<{
  error: string | null | undefined;
}>`
  background-color: #fff;
  display: inherit;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: 0 4px 15px 0 rgba(108, 108, 108, 0.15);
  border-radius: 5px;

  ${({ error }) =>
    error &&
    css`
      border: '1px solid red';
    `};

  &:focus-within {
    border: 1px solid #00f580;
  }

  textarea {
    background-color: transparent;
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: 500;
  }

  svg {
    margin: 0 15px 0 5px;
    cursor: pointer;
  }
`;

export const InputTextAreaError = styled.span`
  font-size: 13px;
  color: red;
  margin-top: 5px;
`;
