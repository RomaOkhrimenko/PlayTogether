import styled from 'styled-components';

export const StyledTextField = styled.div`
  margin-left: 15px;
  width: 100%;

  input {
    width: 100%;
  }

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
  align-items: flex-start;
  @media (max-width: 554px) {
    width: 90%;
  }
`;
