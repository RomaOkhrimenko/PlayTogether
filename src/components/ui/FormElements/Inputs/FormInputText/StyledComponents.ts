import styled from 'styled-components';

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputTextTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > label {
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.08px;
  }

  svg {
    color: var(--green-color);
    margin-right: 10px;
    font-size: 1.6rem;
    line-height: 10px;
  }
`;

export const InputTextContainer = styled.div`
  background-color: #fff;
  display: inherit;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: 0 4px 15px 0 rgba(108, 108, 108, 0.15);
  border-radius: 5px;

  &:focus-within {
    border: 1px solid #00f580;
  }

  input {
    background-color: transparent;
    width: 100%;
    padding: 15px;
    font-size: 1.6rem;
    font-weight: 500;
  }

  svg {
    margin: 0 15px 0 5px;
    cursor: pointer;
  }
`;

export const InputTextError = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 1.3rem;
  color: red;
  margin-top: 0.5rem;
`;
