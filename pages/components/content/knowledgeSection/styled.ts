import styled from "styled-components";
import { colors } from "../../../../styles/globalStyled";
import KnowledgeImage from "../../../../public/images/KnowledgeImage.png" 

export const Main = styled.div`
  width: 100%;
  background: ${colors.mediumBlue};
  color: ${colors.white};
  background-image: url(${KnowledgeImage.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 120px 0;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TimeLine = styled.div`
  width: 1200px;
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  &:first-child{
    width: 0%;
  };
`

export const TextPoint = styled.div`
  min-width: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 5;
  cursor: pointer;
  transform: translateX(50%);
`

export const Line = styled.div.attrs((props: {last: boolean , first : boolean, active: boolean}) => props)`
  width: 100%;
  height: 0.5px;
  border: 1px solid ${((props) => props.active  ? colors.white : "transparent")};
  opacity: ${((props) => props.active  ? "1" : "0.3")};
  position: relative;
  top: 6px;
  transition: 0.3s;
  background: ${colors.white};
  &:after{
    content: "";
    position: absolute;
    width: ${((props) => props.last  ? "25%" : "0")};
    height: 1px;
    left: 100%;
    background: ${colors.white};
  }
  &:before{
    content: "";
    position: absolute;
    width: ${((props) => props.first  ? "25%" : "0")};
    height: 0.5px;
    opacity: 0.3;
    left: -25%;
    background: ${colors.white};
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
`