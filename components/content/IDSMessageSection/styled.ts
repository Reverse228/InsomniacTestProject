import styled from "styled-components";
import { colors, device} from "../../../styles/globalVariables";

export const Main = styled.div`
  width: 100%;
  display: grid;
  margin-top: 50px; 
  grid-template-columns: 1fr 445px 755px 1fr; 
  grid-template-rows: auto 1fr; 
  align-items: end;
  gap: 0px 0px; 

  &::after{
    content: " ";
    position: relative;
    background: ${colors.red};
    width: 100%;
    height: 60%;
    grid-area: 1 / 4 / 3 / 5; 
  }

  @media ${device.tablet}{
    grid-template-columns: minmax(32px, 1fr) 324px minmax(0, 455px) minmax(32px, 1fr); 
  }

  @media ${device.mobile}{
    grid-template-columns: 12px calc(100% - 12px); 
    grid-template-rows: 1fr auto auto; 

    &::after{
      display: none;
    }
 }
`

export const ContactContainer = styled.div` 
  @media ${device.mobile}{
    max-width: 445px;
    width: 100%;
  }
`
export const ImageGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr 445px; 
  grid-template-rows: auto; 
  grid-area: 1 / 1 / 2 / 3;

  &::before{
    content: " ";
    position: relative;
    background: ${colors.blue};
    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }

  @media ${device.tablet}{
    grid-template-columns: 1fr 324px; 
  }

  @media ${device.mobile}{
    grid-template-columns: 12px calc(100% - 12px);
    grid-area: 1 / 1 / 2 / 3;
  }

`
export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3; 

  & span {
    width: 100% !important;
    height: 100% !important;

    & img {
      object-fit: cover;
    }
  }
`
export const Contact = styled.div`
  background: ${colors.green};
  padding: 41px 65px 59px 65px;
  flex-direction: column;
  grid-area: 2 / 2 / 3 / 3;

  @media ${device.tablet}{
    padding: 50px 40px;
  }
  @media ${device.mobile}{
    width: 100%;
    padding: 50px 20px;
  }

  @media ${device.mobile}{
    
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
  grid-area: 1 / 3 / 3 / 4;
  padding: 120px 114px 93px 115px;

  @media ${device.tablet}{
    padding: 70px 60px;
  }
  @media ${device.mobile}{
    grid-area: 3 / 2 / 4 / 3;
    padding: 50px 20px;
  }


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
  color: ${colors.black};
  font-size: 18px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 16px;
  }
`