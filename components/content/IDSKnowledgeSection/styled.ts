import styled from "styled-components";
import { colors, device, widths } from "../../../styles/globalVariables";
import KnowledgeImage from "../../../public/images/KnowledgeImage.png" 

export const Main = styled.div`
  width: 100%;
  background: ${colors.mediumBlue};
  color: ${colors.white};
  background-image: url(${KnowledgeImage.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 120px 36px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet}{
    padding: 70px 36px;
  }
  @media ${device.mobile}{
    padding: 50px 12px 25px 12px;
  }
`

export const TimeLine = styled.div`
  width: ${widths.standard};
  margin-top: 80px;
  display: flex;
  @media ${device.tablet}{
    width: calc(100% - 105px);
  };
  @media ${device.mobile}{
    display: none;
  };
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  &:first-child{
    width: 0%;
  };
`

export const TextPoint = styled.div`
  min-width: 105px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  cursor: pointer;
  transform: translateX(50%);
`

export const Line = styled.div.attrs((props: {last: boolean , first : boolean, active: boolean}) => props)`
  width: 100%;
  height: 1px;
  background: ${((props) => props.active  ? colors.white : "transparent")};
  opacity: ${((props) => props.active  ? "1" : "0.3")};
  position: relative;
  top: 6px;
  transition: 0.3s;
  background: ${colors.white};

  &::after, &::before{
    content: "";
    position: absolute;
    height: 1px;
    background: transparent;
  }

  &:after{
    width: ${((props) => props.last  ? "25%" : "0")};
    left: 100%;
    background: ${colors.white};
  }
  &:before{
    width: ${((props) => props.first  ? "25%" : "0")};
    left: -25%;
    opacity: 0.3;
    background: ${colors.white};
  }

  @media ${device.tablet}{
    &:after{
      width: ${((props) => props.last  ? "50px" : "0")};
    }
  }
`

export const Point = styled.div.attrs((props: {active: boolean}) => props)`
  width: 11px;
  height: 11px;
  transition: 0.3s;
  background: ${((props) => props.active  ? colors.pink : colors.white)};
  border-radius: 100px;
`

export const BtnText = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 16px 0 0 0;
  @media ${device.tablet}{
    font-size: 16px;
    line-height: 24px;
  }
`