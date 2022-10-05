import styled from "styled-components";
import { colors, device, widths } from "../../../../../styles/globalStyled";
import ImagePartBg from "../../../../../public/images/ImagePartBg.png";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const Content = styled.div`
  width: ${widths.standart};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media ${device.tablet} {
    width: ${widths.tablet};
  }
`

export const TextPart = styled.div`
  max-width: 440px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.tablet}{
    max-width: 296px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  @media ${device.tablet} {
    width: 60px;
    height: 60px;
  }
`

export const Title = styled.h3`
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  margin: 36px 0 0 0;
  @media ${device.tablet} {
    font-size: 28px;
    line-height: 36px;
    margin-top: 26px;
  }
`

export const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 17px 0 0 0;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    margin-top: 20px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  margin: 17px 0 10px 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & strong {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.tablet} {

    & strong {
      font-size: 16px;
      line-height: 24px;
    }

    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
  }
`


export const ImagePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImagePartBg.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 525px;
  @media ${device.tablet}{
    width: 335px;
    height: 250px;
  }
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 418px;
  width: 692px;
  @media ${device.tablet}{
    width: 335px;
  }
`

export const ImageHeader = styled.div`
  width: 100%;
  height: 25px;
  background: ${colors.decorGray};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  flex-direction: row;
  border-radius: 10px 10px 0 0;

  @media ${device.tablet}{
    height: 10px;
    border-radius: 5px 5px 0 0;
    padding-left: 10px;
  }
`

export const Decor = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  margin: 0 2px;
  &:nth-child(1){
    background: ${colors.decorRed};
  }
  &:nth-child(2){
    background: ${colors.decorYellow};
  }
  &:nth-child(3){
    background: ${colors.decorGreen};
  }

  @media ${device.tablet}{
    width: 4px;
    height: 4px;
  }
`

export const ImageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  & span {
    max-height: 390px;
    min-width: 692px;
    & img {
      object-fit: cover;
    }
    border-radius: 0 0 10px 10px;
  }

  @media ${device.tablet}{
    & span {
      max-height: 189px;
      min-width: 335px;
      border-radius: 0 0 5px 5px;
    }
  }
`