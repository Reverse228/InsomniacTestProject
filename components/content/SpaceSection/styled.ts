import styled, { keyframes } from "styled-components";
import { colors, device, widths } from "../../../styles/globalVariables";


const appearEl = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  margin: 120px 0;

  &::before, &::after{
    position: absolute;
    content: " ";
    background: ${colors.maxLightGray};
    height: 680px;
    z-index: -10;
  }

  &:before{ 
    width: 50%;
    left: 0;
    transform: translateY(-15%);
  }

  &:after{ 
    width: calc(${widths.standard} - 240px);
    transform: translateY(-15%);
  }

  @media ${device.tablet} {
    width: calc(${widths.tablet});
    min-width: calc(${widths.tablet});
    padding: 70px 16px;
    margin: 70px 20px;
    overflow: hidden;

    &:before{
      height: 483px;
    }

    &:after{ 
      height: 483px;
      width: calc(${widths.tablet} - 190px);
    }
  }

  @media ${device.mobile} {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    min-width: 0;
    margin: 0px;
    padding: 36px 0px;
    position: relative;

    &::before{
      transform: translateY(145px);
      width: 100%;
      height: 75%;
    }
    &::after{
      display: none;
    }
  }
`
export const TextContainer = styled.div`
  max-width: 440px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & a {
    opacity: 0;
    animation: ${appearEl};
    animation-duration: 0.8s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }

  @media ${device.tablet}{
    max-width: 336px;
  }
  @media ${device.mobile}{
    max-width: 100%;
    margin: 55px 12px 0 12px;

  }
`

export const Name = styled.h3`
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  margin: 0;
  opacity: 0;
  animation: ${appearEl};
  animation-duration: 0.8s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;

  @media ${device.tablet}{
    font-size: 30px;
    line-height: 36px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 20px 0;

  opacity: 0;
  animation: ${appearEl};
  animation-duration: 0.8s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  @media ${device.tablet}{
    font-style: italic;
    font-size: 16px;
    line-height: 24px;
  }
`