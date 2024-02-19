import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export const Wrapper = styled.div<{
  desktopBackground: StaticImageData;
  mobileBackground: StaticImageData;
}>`
  height: 100vh;
  width: 100%;
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

export const Container = styled.div`
  width: 580px;
  height: fit-content;
  z-index: 10;
  position: relative;
  padding: 0 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 6.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  border-radius: 15px;
  border: 0.5px solid #00f580;
  box-shadow:
    0 0 25px 0 rgba(0, 0, 0, 0.25),
    0 0 15px 0 rgba(20, 255, 72, 0.15) inset,
    0 0 45px 0 rgba(0, 0, 0, 0.35);

  @media (max-width: 994px) {
    padding: 30px;
  }

  & > h1 {
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 35px;
    font-family: var(--title-font);
  }
`;

export const FormSection = styled.div`
  margin-bottom: 20px;
`;

export const FormSupport = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5rem;

  @media (max-width: 554px) {
    flex-direction: column;
    gap: 10px;
  }

  & > div {
    margin-left: auto;
    text-align: right;
  }

  a {
    color: #00f580;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    height: fit-content;
    margin-left: auto;
  }

  span {
    display: inline-block;
    color: #a2a2a2;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
