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
  padding: 0 20px;

  background-image: ${(props) => `url(${props.desktopBackground?.src})`};
  background-size: cover;
  background-position: 50% 10%;

  @media (max-width: 994px) {
    background-image: ${(props) => `url(${props.mobileBackground?.src})`};
  }
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;

  padding: 6.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  border-radius: 15px;
  border: 0.5px solid #00f580;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25),
    0 0 15px 0 rgba(20, 255, 72, 0.15) inset, 0 0 45px 0 rgba(0, 0, 0, 0.35);

  @media (max-width: 994px) {
    padding: 40px 30px;
  }

  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 40px;

    @media (max-width: 554px) {
      margin-bottom: 30px;
      font-size: 28px;
      line-height: 28px;
    }
  }

  p {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;

    @media (max-width: 554px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 50px;

  @media (max-width: 554px) {
    margin-top: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    border-radius: 1rem;
    background: #00f580;
    padding: 20px 40px;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 554px) {
      padding: 15px 20px;
      font-size: 14px;
      line-height: 14px;
    }
  }
`;
