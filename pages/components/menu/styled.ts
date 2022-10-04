import styled, { keyframes } from "styled-components";
import { colors, device } from "../../../styles/globalStyled";

export const menuLink = styled.a.attrs((props: {active: boolean}) => props)`
  margin: 0 50px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: 0.2s;
  color: ${((props) => props.active  ? colors.pink : colors.black)};
  @media ${device.menuTablet}{
    margin: 10px 0;
    padding: 20px;
  }
  @media (max-height: 450px) AND ${device.menuTablet}{
    margin: 0;sss
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
  margin-right: 187px;
  @media ${device.menuTablet}{
    flex-direction: column;
    align-items: flex-start;
    margin: 100px 0 40px -20px;
  } 
  @media (max-height: 450px) AND ${device.mobile}{
    margin: 100px 0 20px 0;
  }
  @media ${device.menuMobile}{
    align-items: center;
    justify-content: center;
  }
  @media ${device.mobile}{
    margin: 100px 0 40px 0px;
  }
`

export const divMain = styled.header`
  width: 100vw;
  padding: 10px 60px;
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
    max-height: 72px;
    padding: 10px 21px 10px 36px;
  }
  @media ${device.menuMobile}{
    max-height: 52px;
    padding: 10px 5%;
  }
`
export const LogoLink = styled.a`
  height: 68px;
  @media ${device.menuTablet}{
    width: 80px;
    height: 52px;
  }
  @media ${device.menuMobile}{
    width: 58px;
    height: 38px;
  }
`

export const divMenu = styled.div.attrs((props: {active: boolean}) => props)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; 
  @media ${device.menuTablet}{
    position: fixed;
    justify-content: fle-end;
    align-items: center;
    top: 0%;
    left: 0;
    transform: translateX(${((props) => props.active  ? "0" : "100%")});
    width: 100%;
    height: 100vh;
  }
  @media ${device.menuMobile}{
    align-items: center;
    padding: 0; 
  }
`

export const MenuExit = styled.div.attrs((props: {active: boolean}) => props)`
  display: none;
  @media ${device.menuTablet}{
    display: inline;
    width: 65vw;
    height: 100%;
    transition: 0.3s;
    backdrop-filter: blur(${((props) => props.active  ? "5px" : "0")});
    -webkit-backdrop-filter: blur(${((props) => props.active  ? "5px" : "0")});
    opacity: ${((props) => props.active  ? "1" : "0")};
    background: rgba(255, 255, 255, 0.5);
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
    padding-left: 50px;
    border-left: 1px solid ${colors.lightGray};
    flex-direction: column; 
    justify-content: flex-start;
    align-items: flex-start;
    background: ${colors.white};
  }
  @media ${device.menuMobile}{
    min-width: 0;
    width: 100%;
  }
  @media ${device.mobile}{
    padding: 0 25px;
    align-items: center;
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

export const BurgerInner = styled.span.attrs((props: {active: boolean}) => props)`
  width: 20px;
  height: 2px;
  background-color: ${colors.secondGray};
  &:after, &:before {
    width: 20px;
    height: 2px;
    background-color: ${colors.secondGray};
  }
`