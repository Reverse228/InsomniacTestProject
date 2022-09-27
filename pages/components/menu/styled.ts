import styled from "styled-components";
import { colors, flex } from "../../../styles/globalStyled";

export const menuLink = styled.p.attrs((props: {active: boolean}) => props)`
  margin: 0 15px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: ${((props) => props.active  ? colors.pink : colors.black)};
  transition: 0.2s;
`

export const divMain = styled.div`
  width: 100%;
  padding: 10px 50px;
  border-bottom: 1px solid ${colors.lightGray};
  ${flex("space-between", 'center', "row")}
`

export const divMenu = styled.div`
  ${flex("center", 'center', "row")}
`