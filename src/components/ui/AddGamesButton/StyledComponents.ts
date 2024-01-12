import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1.7rem 4rem;
  background: transparent;
  height: fit-content;

  border-radius: 10px;
  border: 1px solid var(--green-color);
  box-shadow: 0 4px 15px 0 rgba(108, 108, 108, 0.15);
  width: fit-content;

  &:hover {
    span {
      color: var(--green-color);
    }

    svg {
      transform: scale(1.2);
    }
  }

  span {
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 21px;
    white-space: nowrap;
    margin-right: 2rem;
    transition: color 0.3s;
  }

  svg {
    width: 27px;
    height: 27px;
    transition: transform 0.3s;
  }
`;