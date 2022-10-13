import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalVariables";

export const Main = styled.div`
  width: ${widths.standard};
  display: flex;
  justify-content: space-between;
  @media ${device.tablet}{
    width: ${widths.tablet};
    margin: 0 36px;
  }
  @media ${device.mobile}{
    width: 100%;
    flex-direction: column;
  }
`

export const Name = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  max-width: 343px;
  margin: 0  ;
  @media ${device.tablet}{
    font-size: 28px;
    margin: 0 64px 0 0 ;
    line-height: 36px;
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