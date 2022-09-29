import styled from "styled-components";
import { colors, device } from "../../../styles/globalStyled";

export const menuLink = styled.p.attrs((props: {active: boolean}) => props)`
  margin: 0 15px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: ${((props) => props.active  ? colors.pink : colors.black)};
  transition: 0.2s;
  @media ${device.tablet}{
    margin: 10px 0;
    padding: 20px;
  }
  @media (max-height: 450px) AND ${device.mobile}{
    margin: 0;
    padding: 10px;
  }
  @media ${device.mobile}{
    text-align: center;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: flex-end;
    transform: translateX(20px);
    margin: 100px 0 40px 0;
  } 
  @media (max-height: 450px) AND ${device.mobile}{
    margin: 100px 0 20px 0;
  }
  @media ${device.mobile}{
    align-items: center;
    justify-content: center;
    transform: translateX(0px);
  }
`

export const divMain = styled.div`
  width: 100vw;
  padding: 10px 50px;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  z-index: 10;
  background: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media ${device.tablet}{
    padding: 10px 35px;
  }
  @media ${device.mobile}{
    padding: 10px 5%;
  }
`

export const divMenu = styled.div.attrs((props: {active: boolean}) => props)`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; 
  transition: 0.4s;
  @media ${device.tablet}{
    position: fixed;
    justify-content: center;
    align-items: flex-end;
    z-index: -10;
    flex-direction: column;
    top: 0%;
    left: 0%;
    transform: translateX(${((props) => props.active  ? "0" : "100%")});
    padding-right: 50px; 
    background: rgba(255,255,255,0.8);
    width: 100%;
    height: 100vh;
  }
  @media ${device.mobile}{
    align-items: center;
    padding: 0; 
  }
`
export const Burger = styled.button`
  display: none;
  @media ${device.tablet}{
    display: block;
  }
`

export const BurgerBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BurgerInner = styled.span`
  width: 30px;
  background-color: ${colors.secondGray};
  &:after, &:before {
    width: 30px;
    background-color: ${colors.secondGray};
  }
`