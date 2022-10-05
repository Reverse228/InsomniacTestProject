import styled from "styled-components";
import { colors, device, widths } from "../../../../../styles/globalStyled";

export const Main = styled.div`
  width: ${widths.standart};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  @media ${device.tablet}{
    max-width: ${widths.tablet}
  }
`

export const Name = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  max-width: 343px;
  margin: 0;
  @media ${device.tablet}{
    max-width: 296px;
    font-size: 28px;
    line-height: 36px;
  }
`

export const InfoContainer = styled.div`
  max-width: 540px;
  displey: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.tablet}{
    max-width: 336px;
  }
`

export const Quotation = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  margin: 0;
  @media ${device.tablet}{
    font-size: 18px;
    line-height: 27px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin: 30px 0 0 0;
  @media ${device.tablet}{
    font-size: 16px;
    line-height: 24px;
  }
`