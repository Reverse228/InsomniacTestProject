import styled from "styled-components";
import { device } from "../../../styles/globalStyled";
import {StyledProps} from './BtnMore.d';

export const Link = styled.a<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: ${({$padding}) => $padding};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${({$color}) => $color};

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;  
  }
`