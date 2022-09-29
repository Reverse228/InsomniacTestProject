import styled from "styled-components";
import { colors, device} from "../../../styles/globalStyled";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`
export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media ${device.tablet}{
    width: 90%;
  }
`

export const ContactContainer = styled.div.attrs((props: {height: number}) => props)` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: ${(props) => (props.height)}px;
`

export const IageContainer = styled.div`
  transform: translateY(100px);
  z-index: -10
`

export const Contact = styled.div`
  background: ${colors.green};
  padding: 25px 75px 25px 50px;
  z-index: 10;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.tablet}{
    padding: 40px 35px 25px 25px;
  }
`
export const h4 = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 20px;
  }
`
export const pContact = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 400;
  @media ${device.tablet}{
    font-size: 16px;
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
  margin-top: 200px;
  padding: 75px 125px;
  @media ${device.tablet}{
    padding: 35px 45px
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

export const LeftDecorContainer = styled.div.attrs((props: {height: number}) => props)` 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
  height: ${(props) => (props.height)}px;
  @media ${device.tablet}{
    width: 5%;
  }
`

export const LeftDecor = styled.div`
  background: ${colors.blue};
  width: 100%;
  height: 427px;
  z-index: -10;
  transform: translateY(101px);
  @media ${device.tablet}{
    transform: translateY(100.5px);
    height: 299px;
  }
`
export const RightDecor = styled.div`
  background: ${colors.red};
  width: 10%;
  height: 380px;
  z-index: -10;
  @media ${device.tablet}{
    width: 5%;
  } 
`