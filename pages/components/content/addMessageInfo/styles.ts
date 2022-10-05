import styled from "styled-components";
import { colors, device } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media ${device.tablet}{
    margin-top: 50px;
  }
  @media ${device.mobile}{
    max-width: 445px;
    flex-direction: column;
    padding-left: 12px;
  }
  @media ${device.minMobile}{
    max-width: 310px;
  }
`

export const AddBtn = styled.div.attrs((props: {active: boolean}) => props)`
  width: 50px;
  height: 50px;
  background: ${colors.orange};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:before{
    content: "";
    position: absolute; 
    transition: 0.2s;
    width: ${(props => props.active ? "20" : "26")}px;
    height: 2.5px;
    background: ${colors.white};
    border-radius: 10px;
  }
  &:after{
    content: "";
    position: absolute; 
    width: ${(props => props.active ? "20" : "26")}px;
    height: 2.5px;
    background: ${colors.white};
    border-radius: 10px;
    transition: 0.2s;
    transform: rotate(${(props => props.active ? "180" : "90")}deg);
  }
`

export const Text = styled.p`
  max-width: 760px;
  margin: 0 0 0 50px;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  @media ${device.tablet}{
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    max-width: 500px;
    margin: 0 0 0 35px;
  }
  @media ${device.mobile}{
    margin: 20px 0 0 0;
    line-height: 27px;
  }
`


