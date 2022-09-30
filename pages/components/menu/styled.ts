import styled from "styled-components";
import { colors, device } from "../../../styles/globalStyled";

export const menuLink = styled.a.attrs((props: {active: boolean}) => props)`
  margin: 0 15px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: ${((props) => props.active  ? colors.pink : colors.black)};
  @media ${device.menuTablet}{
    margin: 10px 0;
    padding: 20px;
  }
  @media (max-height: 450px) AND ${device.menuTablet}{
    margin: 0;
    padding: 10px;
  }
  @media ${device.menuMobile}{
    text-align: center;
    padding: 20px 5px;
  }
`

export const LinksContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${device.menuTablet}{
    flex-direction: column;
    align-items: flex-start;
    transform: translateX(20px);
    margin: 100px 0 40px 0;
  } 
  @media (max-height: 450px) AND ${device.mobile}{
    margin: 100px 0 20px 0;
  }
  @media ${device.menuMobile}{
    align-items: center;
    justify-content: center;
    transform: translateX(0px);
  }
`

export const divMain = styled.header`
  width: 100vw;
  padding: 10px 50px;
  position: relative;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  z-index: 10;
  background: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media ${device.menuTablet}{
    position: fixed;
    z-index: 10;
    padding: 10px 35px;
  }
  @media ${device.menuMobile}{
    padding: 10px 5%;
  }
`

export const divMenu = styled.div.attrs((props: {active: boolean}) => props)`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; 
  @media ${device.menuTablet}{
    position: fixed;
    justify-content: fle-end;
    align-items: center;
    z-index: -10;
    transition: 0.4s;
    top: 0%;
    left: 0%;
    transform: translateX(${((props) => props.active  ? "0" : "100%")});
    width: 100%;
    height: 100vh;
  }
  @media ${device.menuMobile}{
    align-items: center;
    padding: 0; 
  }
`

export const MenuExit = styled.div`
  display: none;
  @media ${device.menuTablet}{
    display: inline;
    width: 65vw;
    height: 100%;
  }
  @media ${device.menuMobile}{
    display: none;
  }
`

export const MenuContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; 
  @media ${device.menuTablet}{
    width: 35vw;
    height: 100%;
    min-width: 350px;
    padding: 0 25px;
    flex-direction: column; 
    justify-content: flex-start;
    background: ${colors.white};
  }
  @media ${device.menuMobile}{
    min-width: 0;
    width: 100%;
  }
`

export const Burger = styled.button`
  display: none;
  @media ${device.menuTablet}{
    display: block;
  }
`

export const BurgerBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BurgerInner = styled.span`
  width: 25px;
  height: 2px;
  background-color: ${colors.secondGray};
  &:after, &:before {
    width: 25px;
    height: 2px;
    background-color: ${colors.secondGray};
  }
`