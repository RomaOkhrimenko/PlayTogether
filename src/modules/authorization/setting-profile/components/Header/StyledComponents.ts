import styled from 'styled-components';
import Image from 'next/image';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px auto 100px;

  @media (max-height: 800px) {
    margin-bottom: 40px;
  }

  @media (max-width: 554px) {
    margin-bottom: 70px;
  }

  h2 {
    margin-top: 15px;
    color: var(--color-white);
    font-size: 32px;
    font-weight: 800;
    line-height: 44.8px; /* 44.8px */
    text-align: center;

    @media (max-width: 554px) {
      font-size: 26px;
      line-height: 28px;
    }
  }
`;

export const HeaderImage = styled(Image)`
  width: 150px;
  height: 150px;

  @media (max-width: 554px) {
    width: 120px;
    height: 120px;
    display: none;
  }
`;
