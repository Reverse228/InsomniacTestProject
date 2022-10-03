import styled from "styled-components";
import { colors, device} from "../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(769px, 1200px) 1fr;
  grid-template-rows: 1fr;
  @media ${device.tablet}{
    grid-template-columns: 1fr minmax(308px, 769px) 1fr;
  }
  @media ${device.mobile}{
    grid-template-columns: minmax(12px, 1fr) 445px minmax(12px, 1fr);  
  }
  @media ${device.menuTablet}{
    margin-top: 93px;
  }
`
export const Content = styled.div`
  width: 100%;
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: repeat(3, auto); 
  grid-template-rows: 200px auto; 
  gap: 0px 0px; 
  grid-template-areas: 
    "a c c"
    "a b b"; 
  @media ${device.mobile}{
    grid-template-columns: auto; 
    grid-template-rows: auto 1fr; 
    grid-template-areas: 
      "a"
      "b"; 
  }
  
`

export const ContactContainer = styled.div` 
  grid-area: a;
  width: 100%;
  max-width: 445px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  z-index: 1;
  @media ${device.tablet}{
    max-width: 324px;
  }
  @media ${device.mobile}{
    max-width: 445px;
    width: 100%;
  }
`

export const IageContainer = styled.div`
  z-index: -10;
  transform: translateY(100px);
`

export const Contact = styled.div`
  background: ${colors.green};
  padding: 41px 65px 59px 65px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.tablet}{
    padding: 50px 40px;
  }
  @media ${device.mobile}{
    width: 100%;
    padding: 50px 20px;
  }
`
export const h4 = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 20px;
    font-style: italic;
  }
`
export const pContact = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 16px;
    font-style: italic;
  }
`

export const mail = styled.a`
  cursor: pointer;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 16px;
  }
`

export const Info = styled.div`
  background: ${colors.gray};
  padding: 120px 114px 93px 115px;
  width: 100%;
  min-width: 310px;
  grid-area: b;
  @media ${device.tablet}{
    padding: 70px 60px;
  }
  @media ${device.mobile}{
    max-width: 445px;
    padding: 50px 20px;
  }
`
export const InfoSpace = styled.div`
  grid-area: c;
`

export const h2 = styled.h2`
  margin: 0;
  color: ${colors.black};
  font-size: 50px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 30px;
  }
`
export const h3 = styled.h3`
  color: ${colors.pink};
  font-size: 22px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 18px;
    font-style: italic;
  }
`
export const pInfo = styled.p`
  margin: 50px 0 0 0;
  width: 100%;
  color: ${colors.black};
  font-size: 18px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 16px;
  }
`

export const LeftDecor = styled.div`
  background: ${colors.blue};
  width: 100%;
  height: 528.5px;
  z-index: -10;
  min-width: 36px;
  transform: translateY(101px);
  @media ${device.tablet}{
    height: 358.5px;
  }
  @media ${device.mobile}{
    min-width: 12px;
  }
`
export const RightDecor = styled.div`
  background: ${colors.red};
  width: 100%;
  min-width: 36px;
  align-self: end;
  height: 380px;
  z-index: -10;
  @media ${device.mobile}{
    min-width: 12px;
  }
`