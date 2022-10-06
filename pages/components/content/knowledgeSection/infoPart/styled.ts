import styled from "styled-components";
import { colors, device, widths } from "../../../../../styles/globalStyled";

export const Main = styled.div`
  max-width: ${widths.standart};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  @media ${device.tablet}{
    max-width: ${widths.tablet};
  }
  @media ${device.mobile}{
    flex-direction: column;
    max-width: 445px;
    min-width: 310px;
  }
`

export const Name = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  max-width: 343px;
  margin: 0 227px 0 0 ;
  @media ${device.tablet}{
    font-size: 28px;
    margin: 0 64px 0 0 ;
    line-height: 36px;
    min-width: 296px;
  }
  @media ${device.mobile}{
    margin: 0;
    min-width: 0px;
    max-width: 100%;
  }
`

export const InfoContainer = styled.div`
  max-width: 540px;
  @media ${device.tablet}{
    max-width: 336px;
  }
  @media ${device.mobile}{
    margin: 40px 0 0 0;
    max-width: 100%;
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
  margin-top: 30px;
  @media ${device.tablet}{
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.mobile}{
    margin-top: 40px;
  }
`