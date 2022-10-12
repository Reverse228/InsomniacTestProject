import styled from "styled-components";
import { colors, device, widths } from "../../../styles/globalVariables";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 120px 0;
  @media ${device.menuTablet}{
    margin-top: 120px;
  }
`

export const Content = styled.div`
  width: ${widths.standard};
  margin: 0 36px;
  display: flex;
  flex-direction: row;
  @media ${device.tablet}{
    width: ${widths.tablet}; 
  }
  @media ${device.mobile}{
    width: 100%;
    margin: 0 12px;
    flex-direction: column;
    align-items: center;
  }
`

export const TextPart = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    margin-bottom: 40px;
  }
  @media ${device.mobile}{ 
    max-width: 100%;
  }
`

export const H3 = styled.h3`
  font-size: 24px;
  color: ${colors.pink};
  font-weight: 400;
  margin-bottom: 40px;
  @media ${device.tablet}{
    font-size: 16px;
    margin-bottom: 30px;
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
  @media ${device.mobile}{
    max-width: 100%;
  }
`


export const ImageContainer = styled.div`
  width: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  @media ${device.tablet}{
    margin-left: 5px;
  }
  @media ${device.mobile}{
    width: 100%;
    justify-content: center;
  }
`