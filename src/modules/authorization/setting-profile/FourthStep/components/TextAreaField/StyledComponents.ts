import styled from 'styled-components';

export const TextArea = styled.div`
  margin-left: 15px;
  width: 100%;

  textarea {
    width: 450px;
    height: 115px;
    resize: none;

    @media (max-width: 1024px) {
      width: 370px;
    }

    @media (max-width: 994px) {
      width: 300px;
    }
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
