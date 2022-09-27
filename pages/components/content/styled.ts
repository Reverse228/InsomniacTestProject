import styled from "styled-components";
import Image from "next/image";
import { colors, flex, setText } from "../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  ${flex("center", "center", "row")}
`
export const Content = styled.div`
  width: 80%;
  ${flex("center", "flex-end", "row")}
`

export const NextImage = styled(Image)`
  transform: translateY(70px);
`

export const ContactContainer = styled.div` 
  ${flex("center", "flex-end", "column")}
`

export const Contact = styled.div`
  background: ${colors.green};
  padding: 25px 75px 25px 50px;
`

export const h4 = styled.h4`
  margin: 0;
  ${setText(colors.white, "24px", 400)}
`
export const pContact = styled.p`
  ${setText(colors.white, "18px", 400)}
`

export const mail = styled.a`
  cursor: pointer;
  ${setText(colors.white, "18px", 400)}
`

export const Info = styled.div`
  background: ${colors.gray};
  padding: 75px 125px
`
export const h2 = styled.h2`
  margin: 0;
  ${setText(colors.black, "50px", 400)}
`
export const h3 = styled.h3`
  ${setText(colors.pink, "22px", 400)}
`
export const pInfo = styled.p`
  margin: 50px 0 0 0;
  ${setText(colors.black, "18px", 400)}
`

export const ContainerLeftDecor = styled.div`
  width: 10%;
`

export const LeftDecor = styled.div`
  background: ${colors.blue};
  width: 100%;
  height: 200px;
  position: relative;
  top: 0;
`
export const RightDecor = styled.div`
  background: ${colors.red};
  width: 10%;
  height: 200px; 
`