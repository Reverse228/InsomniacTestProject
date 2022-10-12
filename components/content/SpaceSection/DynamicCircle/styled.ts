import styled, { keyframes } from "styled-components";
import { colors, device } from "../../../../styles/globalVariables";
import { StyledProps } from './DynamicCircle.d';

const rotateAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Main = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet}{
    width: 320px;
    height: 320px;
  }
  
  @media ${device.mobile}{
    width: 290px;
    height: 290px;
  }
`

export const BigCircle = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({$color}) => $color};
  border-radius: 100%;
  display: flex;
  transition: 1s;
  justify-content: center;
  align-items: center;
`

export const RotateCircle = styled.div<StyledProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1.5px solid transparent;
  animation: ${rotateAnim} 60s linear infinite;
  border-radius: 100%;

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    box-sizing: border-box;
    transition: 1s;
    border: 5px solid ${({$color}) => $color};
    background: ${colors.white};
    transform: translateY(-50%);
  }
`

export const ContentCircle = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  transition: 1s;
  border: 1px solid ${({$color}) => $color};
  border-radius: 100%;
  background: ${colors.white};
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ImageContainer = styled.div<StyledProps>`
  position: relative;
  margin-bottom: 17px;
  width: 80px; 

  & svg circle{
    fill: ${({$color}) => $color};
    transition: fill 1s linear;
  }

  @media ${device.tablet}{
    width: 40px;
    margin-bottom: 10px;
  }
`
export const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  @media ${device.tablet}{
    font-size: 12px;
  }
`
