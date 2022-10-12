import styled from "styled-components";
import { device } from "../../styles/globalVariables";
import {StyledProps} from "./BtnMore.d";

export const Link = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: ${({$padding}) => $padding};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${({$color}) => $color};

  & svg{
      transition: 0.2s;
      transform: translateY(1px);
  }

  &:hover{
    & svg{
      transform: translate(5px, 1px);
    }
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;  
  }
`