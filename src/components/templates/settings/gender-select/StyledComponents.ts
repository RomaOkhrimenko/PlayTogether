import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Select = styled.div`
  margin-left: 15px;

  & > h4 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Gender = styled.div<{ active: boolean }>`
  width: 80px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.3s;
  ${({ active }) =>
    active &&
    css`
      border: 1px solid var(--green-color);
    `};
`;

export const GenderImage = styled(Image)``;
