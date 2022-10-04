import styled from "styled-components";
import { colors, device, widths } from "../../../../styles/globalStyled";
import AboutImage from "../../../../public/images/aboutImage.png";


export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(36px, 1fr) minmax(769px,1200px) minmax(36px, 1fr);
  grid-template-rows: 1fr;
  margin-bottom: 120px;
  background: ${colors.lightGray};
  @media ${device.tablet}{
    grid-template-columns: minmax(36px, 1fr) minmax(308px, 769px) minmax(36px, 1fr);
  }
  @media ${device.mobile}{
    grid-template-columns: minmax(12px, 1fr) 445px minmax(12px, 1fr);  
  }
  @media ${device.minMobile}{
    grid-template-columns: minmax(12px, 1fr) 310px minmax(0px, 1fr); 
    background: none;
  }
`

export const Content = styled.div`
  max-width: ${widths.standart};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media ${device.mobile}{
    flex-direction: column;
  }
  @media (max-width: 475px){
    &:before {
      content: "";
      position: absolute;
      left: 0;
      background: ${colors.lightGray};
      height: 1200px;
      width: 30%;
      z-index: -10;
    }
  }
` 

export const Title = styled.div`
  width: 445px;
  min-width: 445px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: ${colors.darkBlue};
  @media ${device.tablet}{

    min-width: 324px;
  }
  @media ${device.mobile}{
    width: 100%;
    min-width: 0px;
  }
`

export const H3 = styled.h3`
  color: ${colors.white};
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
  color: ${colors.white};
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 755px;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${AboutImage.src});
  background-size: cover;
`

export const Description = styled.div` 
  width: 100%;
  padding: 75px 120px;
  background: ${colors.blue};
  margin-bottom: -100px;
  @media ${device.tablet}{
    padding: 50px;
  }
  @media (max-width: 475px){
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