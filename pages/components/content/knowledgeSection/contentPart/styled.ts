import styled from "styled-components";
import { colors, device, widths } from "../../../../../styles/globalStyled";
import ImagePartBg from "../../../../../public/images/ImagePartBg.png";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media ${device.mobile}{
    max-width: 445px;
    flex-direction: column;
    margin-top: 50px;
  }
`

export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media ${device.tablet} {
    width: ${widths.tablet};
  }
  @media ${device.mobile}{
    flex-direction: column;
    width: 100%;
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
  @media ${device.mobile}{
    max-width: 445px;
    min-width: 310px;
    margin-bottom: 20px;
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
  margin-top: 36px;
  @media ${device.tablet} {
    font-size: 28px;
    line-height: 36px;
    margin-top: 26px;
  }
  @media ${device.mobile} {
    margin-top: 20px;
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
  @media ${device.mobile} {
    margin: 15px 0 20px 0;
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
  @media ${device.mobile}{
    display: none;
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

export const IntervalContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding: 0 5px 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`

export const TextPoint = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  top: 6px;
  transition: 0.3s;
  background: rgb(248,248,248);
  background: linear-gradient(90deg, rgba(248,248,248,0.09) 0%, rgba(252,252,252,1) 100%);
`

export const Point = styled.div`
  width: 11px;
  height: 11px;
  transition: 0.3s;
  background: ${colors.pink};
  border-radius: 100px;
`

export const BtnText = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  @media ${device.tablet}{
    font-size: 16px;
    line-height: 24px;
  }
`