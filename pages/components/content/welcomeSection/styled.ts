import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 120px 0;
  @media ${device.menuTablet}{
    margin-top: 120px;
  }
  @media ${device.mobile}{
    margin-top: 130px;
  }
`

export const Content = styled.div`
  width: ${widths.standard};
  margin: 0 36px;
  min-width: 769px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media ${device.tablet}{
    min-width: 308px;
  }
  @media ${device.mobile}{
    width: 445px;
    flex-direction: column;
  }
`

export const TextPart = styled.div`
  width: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.tablet}{
    margin-right: 5px;
  }
  @media ${device.mobile}{
    width: 100%;
    margin-bottom: 40px;
  }
`

export const H1 = styled.h1`
  font-size: 70px;
  margin: 0 0 60px 0;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 40px;
    max-width: 336px;
    margin: 0 0 40px 0;
  }
  @media ${device.mobile}{
    width: 100%;
    max-width: 100%;
  }
`

export const H3 = styled.h3`
  font-size: 24px;
  color: ${colors.pink};
  font-weight: 400;
  margin: 0 0 40px 0;
  @media ${device.tablet}{
    font-size: 16px;
    margin: 0 0 30px 0;
  }
`

export const P = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  font-style: italic;
  max-width: 445px;
  @media ${device.tablet}{
    font-size: 16px;
    max-width: 320px;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.tablet}{
    margin-left: 5px;
  }
  @media ${device.mobile}{
    width: 100%;
  }
`