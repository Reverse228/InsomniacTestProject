import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 100px 0;
  margin: 120px 0;

  &:before{ 
    position: absolute;
    content: " ";
    background: ${colors.maxLightGray};
    height: 680px;
    width: 50%;
    left: 0;
    transform: translateY(-15%);
    z-index: -10;
  }

  &:after{ 
    position: absolute;
    content: " ";
    background: ${colors.maxLightGray};
    height: 680px;
    width: calc(${widths.standard} - 240px);
    transform: translateY(-15%);
    z-index: -10;
  }

  @media ${device.tablet}{
    width: ${widths.tablet};
    min-width: ${widths.tablet};
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

  @media ${device.mobile}{
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 0;
    position: relative;
    margin: 0px;
    padding: 36px 0px;

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
  @media ${device.tablet}{
    font-size: 30px;
    line-height: 36px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 20px 0 20px 0;
  @media ${device.tablet}{
    font-style: italic;
    font-size: 16px;
    line-height: 24px;
  }
`