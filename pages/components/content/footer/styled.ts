import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalStyled";

export const Main = styled.footer`
  width: 100%;
  background: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: ${widths.standard};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 120px 105px;
  color: ${colors.white};

  @media ${device.tablet}{
    width: ${widths.tablet};
    flex-direction: column;
    padding: 70px 0;
    margin: 0 36px;
  }

  @media ${device.mobile}{
    width: 100%;
    padding: 50px 0;
    margin: 0 12px;
  }
`

export const TextParent = styled.div`
  display: flex;
  height: 510px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  &:first-child{
    max-width: 580px;
  }

  &:last-child{
    max-width: 320px;
  }
  
  @media ${device.tablet}{
    max-width: 100% !important;
    height: auto;
  }
`

export const TextContainer = styled.div`
  width: 100%;
`

export const Name = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;

  @media ${device.tablet}{
    font-size: 28px;
    line-height: 36px;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  @media ${device.tablet}{
    font-size: 16px;
    line-height: 24px;
  }
`

export const BottomInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const BottomText = styled(Text)`
  max-width: 320px;

  @media ${device.tablet}{
    max-width: 100%;
  }
`