import styled from 'styled-components';

export const Number = styled.div`
  position: relative;
  width: fit-content;
`;

export const FieldNumberContent = styled.div`
  position: absolute;
  color: #000;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: #1e1e1e;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
