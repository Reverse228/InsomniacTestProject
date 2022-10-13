import styled from "styled-components";
import { colors, device, widths } from "../../../styles/globalVariables";
import AboutImage from "../../../public/images/aboutImage.png";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${colors.lightGray};
  @media ${device.mobile}{
    background: none;
  }
`
export const Content = styled.div`
  max-width: ${widths.standard};
  display: flex;
  @media ${device.tablet}{
    width: ${widths.tablet};
    margin: 0 36px;
  }
  @media ${device.mobile}{
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding-left: 12px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      background: ${colors.lightGray};
      height: calc(100% + 100px);
      width: 50%;
      z-index: -10;
    }
  }
` 
export const Title = styled.div`
  min-width: 445px;
  flex-direction: column;
  background: ${colors.darkBlue};
  color: ${colors.white};
  @media ${device.tablet}{
    min-width: 324px;
  }
  @media ${device.mobile}{
    width: 100%;
    min-width: 0px;
  }
`
export const H3 = styled.h3`
  font-size: 18px;
  margin: 70px 0 0 40px;
  @media ${device.tablet}{
    font-size: 16px;
  }
  @media ${device.mobile}{
    margin: 50px 0 0 20px;
  }
`
export const H2 = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  max-width: 228px;
  margin: 40px 0 0 40px;
  @media ${device.tablet}{
    font-size: 28px;
  }
  @media ${device.mobile}{
    margin: 30px 0 86px 20px;
    max-width: 350px;
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 755px;

  @media ${device.mobile}{
    max-width: 100%;
  }
`
export const ImageContainer = styled.div`
  height: 300px;
  background-image: url(${AboutImage.src});
  background-size: cover;
`
export const Description = styled.div` 
  padding: 75px 120px;
  background: ${colors.blue};
  margin-bottom: -100px;
  @media ${device.tablet}{
    padding: 50px;
  }
  @media ${device.mobile}{
    margin-bottom: 0px;
  }
`
export const DescP = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin: 0;
  @media ${device.tablet}{
    font-size: 16px;
  }
`