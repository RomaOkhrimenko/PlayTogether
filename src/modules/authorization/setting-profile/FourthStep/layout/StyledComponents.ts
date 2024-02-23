import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FieldWrapper = styled.div`
  margin-left: 15px;
  width: 100%;

  & > h4 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 15px;
  }

  input {
    width: 100%;
  }
`;
