import styled from "styled-components";
import { colors, device } from "../../styles/globalVariables";
import { StyledProps } from "./Menu.d";

export const Link = styled.a<StyledProps>`
  margin: 0 50px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: 0.2s;
  color: ${(({$active}) => $active  ? colors.pink : colors.black)};

  @media ${device.tablet} {
    margin: 10px 0px;
    padding: 20px;
  }

  @media ${device.menuMobile} {
    text-align: center;
    padding: 20px 5px;
  }
`

export const LinksContainer = styled.nav`
  display: flex;
  margin-right: 187px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: column;
    margin: 100px 0 40px -20px;
  } 

  @media ${device.menuMobile} {
    margin-left: 0px;
  }
`

export const Main = styled.header`
  width: 100vw;
  padding: 10px 60px;
  border-bottom: 1px solid ${colors.lightGray};
  z-index: 10;
  background: white;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet}{
    position: fixed;
    align-items: center;
    left: 0;
    top: 0;
    padding: 10px 21px 10px 36px;
  }
  @media ${device.mobile}{
    max-height: 52px;
    padding: 10px 0px 10px 12px;
  }
`
export const LogoLink = styled.a`
  height: 68px;
  @media ${device.tablet}{
    width: 80px;
    height: 52px;
  }
  @media ${device.mobile}{
    width: 58px;
    height: 38px;
  }
`

export const Menu = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width: 80%;

  @media ${device.tablet}{
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(${(({$active}) => $active  ? "0" : "100%")});
    width: 100%;
    height: 100vh;
  }
`
// @TODO Dmitri can you change Styled component name MenuExit to Backdrop
export const Backdrop = styled.div<StyledProps>`
  display: none;
  
  @media ${device.tablet} {
    display: inline;
    width: 70vw;
    height: 100%;
    transition: 0.3s;
    backdrop-filter: blur(${(({$active}) => $active  ? "5px" : "0")});
    opacity: ${(({$active}) => $active  ? "1" : "0")};
    background: rgba(79, 79, 79, 0.5);
  }

  @media ${device.menuMobile}{
    display: none;
  }
`

export const MenuContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  @media ${device.tablet} {
    width: 30vw;
    min-width: 350px;
    height: 100%;
    padding: 0 25px 0 50px;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    overflow-y: scroll;
    padding-bottom: 50px;
    border-left: 1px solid ${colors.lightGray};
    background: ${colors.white};
  }

  @media ${device.menuMobile} {
    align-items: center;
    width: 100%;
    min-width: 0px;
    padding: 0 12px 50px 12px;
  }
`

export const Burger = styled.button`
  display: none;

  @media ${device.tablet} {
    display: block;
    outline: none;
  }

  @media ${device.mobile} {
    padding-right: 12px;
  }
`
export const BurgerBox = styled.span`
  display: flex;
  justify-content: center;
`
export const BurgerInner = styled.span`
  width: 20px;
  height: 2px;
  background-color: ${colors.secondGray};

  &::after,
  &::before {
    width: 100%;
    height: 2px;
    background-color: ${colors.secondGray};
  }
`