import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export const Wrapper = styled.div<{
  desktopBackground: StaticImageData;
  mobileBackground: StaticImageData;
}>`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: ${(props) => `url(${props.desktopBackground?.src})`};
  background-size: cover;
  background-position: 50% 10%;
  @media (max-width: 994px) {
    background-image: ${(props) => `url(${props.mobileBackground?.src})`};
  }
`;
